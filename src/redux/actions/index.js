export const FETCH_SONGS_REQUEST = "FETCH_SONGS_REQUEST";
export const FETCH_SONGS_SUCCESS = "FETCH_SONGS_SUCCESS";
export const FETCH_SONGS_FAILURE = "FETCH_SONGS_FAILURE";

export const fetchSongsRequest = () => ({ type: FETCH_SONGS_REQUEST });
export const fetchSongsSuccess = (genre, songs) => ({
  type: FETCH_SONGS_SUCCESS,
  payload: { genre, songs },
});
export const fetchSongsFailure = (error) => ({
  type: FETCH_SONGS_FAILURE,
  payload: error,
});

export const setCurrentSong = (song) => ({
  type: "SET_CURRENT_SONG",
  payload: song,
});

export const toggleLikeSong = (songId) => ({
  type: "TOGGLE_LIKE_SONG",
  payload: songId,
});

export const fetchSongs = (artistName, genre) => {
  return async (dispatch) => {
    dispatch(fetchSongsRequest());
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`
      );
      if (!response.ok) throw new Error("Error in fetching songs");
      const { data } = await response.json();
      dispatch(fetchSongsSuccess(genre, data.slice(0, 4)));
    } catch (error) {
      dispatch(fetchSongsFailure(error.message));
    }
  };
};
