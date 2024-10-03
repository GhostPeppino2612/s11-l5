import {
  FETCH_SONGS_REQUEST,
  FETCH_SONGS_SUCCESS,
  FETCH_SONGS_FAILURE,
} from "../actions";

const initialState = {
  rock: [],
  pop: [],
  hiphop: [],
  loading: false,
  error: null,
  currentSong: null,
  likedSongs: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SONGS_REQUEST:
      return { ...state, loading: true };
    case FETCH_SONGS_SUCCESS:
      return {
        ...state,
        [action.payload.genre]: action.payload.songs,
        loading: false,
      };
    case FETCH_SONGS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    case "SET_CURRENT_SONG":
      return {
        ...state,
        currentSong: action.payload,
      };
    case "TOGGLE_LIKE_SONG":
      const isLiked = state.likedSongs.includes(action.payload);
      return {
        ...state,
        likedSongs: isLiked
          ? state.likedSongs.filter((id) => id !== action.payload)
          : [...state.likedSongs, action.payload],
      };
    default:
      return state;
  }
};

export default mainReducer;
