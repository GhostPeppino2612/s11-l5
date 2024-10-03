import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../redux/actions";
import MusicSection from "./MusicSection";


const MainSection = () => {
  const dispatch = useDispatch();
  const { rock, pop, hiphop, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchSongs("queen", "rock"));
    dispatch(fetchSongs("katyperry", "pop"));
    dispatch(fetchSongs("eminem", "hiphop"));
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>

      <MusicSection title="Rock Classics" songs={rock} id="rock" />
      <MusicSection title="Pop Culture" songs={pop} id="pop" />
      <MusicSection title="#HipHop" songs={hiphop} id="hiphop" />
    </main>
  );
};

export default MainSection;
