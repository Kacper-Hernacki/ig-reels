import React, { useEffect, useState } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import video1 from "./journey.mp4";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
          alt=""
        />
        <h1>Reels</h1>
      </div>
      <div className="app__videos">
        <VideoCard
          channel="bambo-chanel"
          avatarSrc=""
          song="test-song"
          url={video1}
          likes={900}
          shares={10}
        />
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
        <VideoCard
          channel="bambo-chanel"
          avatarSrc=""
          song="test-song"
          url="https://media.istockphoto.com/videos/player-penetrating-to-the-basket-video-id475859609"
          likes={900}
          shares={10}
        />
      </div>
    </div>
  );
}

export default App;
