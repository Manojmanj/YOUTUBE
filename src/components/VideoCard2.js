import React from "react";
import { useSelector } from "react-redux";

const VideoCard2 = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div
      className={`p-2 m-2 ${
        isMenuOpen ? "w-72" : "w-[300px]"
      } shadow-lg rounded-lg h-[290px]`}
    >
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-1">{title.split("|")[0].trim()}</li>
        <li>{channelTitle}</li>
        <li>10M views</li>
      </ul>
    </div>
  );
};

export default VideoCard2;
