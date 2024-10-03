import { useSelector } from "react-redux";

const Player = (props) => {
  const currentSong = useSelector((state) => state.currentSong);
  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row align-items-center h-100 position-relative">
        <div className="ms-5 ps-5 col-6 position-absolute start-0" style={{ width: "400px" }}>
          {currentSong ? (
            <div className="d-flex">
              <img
                src={currentSong.album.cover_medium} // Immagine dell'album
                alt={currentSong.title}
                className="img-fluid mr-3"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <div className="text-white ps-2 d-inline-block">
                <p className="m-0 fw-bold">{currentSong.title}</p> {/* Titolo canzone */}
                <p className="m-0 fst-italic">{currentSong.artist.name}</p>{" "}
                {/* Artista */}
              </div>
            </div>
          ) : (
            <p className="text-white">Nessuna canzone selezionata</p>
          )}
        </div>
        <div className="col-6 ms-auto playerControls">
          <div className="text-white d-flex">
            <div className="d-flex align-items-center gap-5">
              <div className="m-0">
                <a href="#">
                  <img src={require("../playerbuttons/shuffle.png")} alt="shuffle" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={require("../playerbuttons/prev.png")} alt="prev" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={require("../playerbuttons/play.png")} alt="play" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={require("../playerbuttons/next.png")} alt="next" />
                </a>
              </div>
              <div>
                <a href="#">
                  <img src={require("../playerbuttons/repeat.png")} alt="repeat" />
                </a>
              </div>
            </div>
          </div>
          <div className="progress mx-auto mt-3">
            <div role="progressbar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
