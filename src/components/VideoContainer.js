import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideo] = useState([]);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideo(json.items);
  };

  return (
    <div
      className={`flex flex-wrap h-[calc(100vh-6.5rem)] overflow-y-auto ${
        isMenuOpen ? "pl-0" : "pl-9"
      }`}
    >
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
