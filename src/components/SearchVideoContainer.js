import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import VideoCard2 from "./VideoCard2";

const SearchVideoContainer = () => {
  const { query } = useParams();
  console.log(query);

  const [videos, setVideo] = useState([]);
  console.log(videos);

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideo();
  }, [query]);

  const getVideo = async () => {
    const data = await fetch(
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
        query +
        "&type=video&key=AIzaSyAJlprb7Q5Wb9owO091LCRm2uYoF75vX_E"
    );
    const json = await data.json();
    setVideo(json.items);
    // console.log(json.items);
  };
  return (
    <div
      className={`flex flex-wrap h-[calc(100vh-6.5rem)] overflow-y-auto ${
        isMenuOpen ? "pl-0" : "pl-0"
      }`}
    >
      {videos.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
          <VideoCard2 info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideoContainer;
