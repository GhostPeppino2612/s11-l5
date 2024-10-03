import AlbumCard from "./AlbumCard";

const MusicSection = ({ title, songs, id }) => (
  <div className="row">
    <div className="col-10">
      <div id={id}>
        <h2>{title}</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
          {songs.map((song, index) => (
            <AlbumCard key={index} song={song} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MusicSection;
