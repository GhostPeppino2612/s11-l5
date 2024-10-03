import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, toggleLikeSong } from "src/redux/actions";

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likedSongs);

  const isLiked = likedSongs.includes(song.id);

  const handlePlayClick = () => {
    dispatch(setCurrentSong(song));
  };

  const handleLikeClick = () => {
    dispatch(toggleLikeSong(song.id));
  };
  return (
    <div className="col text-center position-relative">
      <div className="position-absolute top-0 end-0">
        <button className="btn text-white fs-2 px-4 py-0" onClick={handleLikeClick}>
          {isLiked ? "❤️" : "♡"}
        </button>
      </div>
      <img
        className="img-fluid"
        src={song.album.cover_medium}
        alt="track"
        onClick={handlePlayClick}
        style={{ cursor: "pointer" }}
      />
      <p>
        Track: "{song.title}"<br />
        Artist: {song.artist.name}
      </p>
    </div>
  );
};

export default AlbumCard;
