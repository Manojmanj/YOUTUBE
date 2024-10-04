import React, { useState } from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const [formattedNumber, setFormattedNumber] = useState("");

  const formatNumber = (num) => {
    // Using Intl.NumberFormat with compact notation
    return new Intl.NumberFormat("en", { notation: "compact" }).format(num);
  };

  const number = statistics.viewCount; // Example number to format

  React.useEffect(() => {
    const formatted = formatNumber(number);
    setFormattedNumber(formatted);
  }, [number]);

  return (
    <div
      className={`p-2 m-2 ${
        isMenuOpen ? "w-72" : "w-[300px]"
      } shadow-lg rounded-lg h-[260px] transition-transform duration-300 ease-in-out hover:scale-106`}
    >
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold text-base pt-1 truncate">
          {title.split("|")[0].trim()}
        </li>
        <li className="pt-[2px]">{channelTitle}</li>
        <li className="pt-[3px]">{formattedNumber} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
