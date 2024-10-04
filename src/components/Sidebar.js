import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (isMenuOpen === null) return;
  //early return
  if (isMenuOpen === false)
    return (
      <div className="w-36">
        <div className="inline-block">
          <svg
            className="h-7 pl-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
          </svg>
          <Link to="/">
            <h1 className="text-sm pl-5">Home</h1>
          </Link>
        </div>

        <div>
          <div className="inline-block pt-5">
            <img
              className="h-7 pl-6"
              src="https://img.icons8.com/material-outlined/24/youtube-shorts.png"
              alt="youtube-shorts"
            />
            <h1 className="text-sm pl-5">Shorts</h1>
          </div>
        </div>

        <div className="inline-block pt-5">
          <svg
            className="h-6 pl-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 22q-.825 0-1.412-.587T2 20V10q0-.825.588-1.412T4 8h16q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22zm6-3l6-4l-6-4zM4 7V5h16v2zm3-3V2h10v2z"
            />
          </svg>
          <h1 className="text-sm pl-2">Subscriptions</h1>
        </div>

        <div className="inline-block pt-5">
          <img
            className="h-[30px] pl-6"
            src="https://img.icons8.com/ios/50/youtube-play--v1.png"
            alt="youtube-play--v1"
          />
          <h1 className="text-sm pl-6">You</h1>
        </div>
      </div>
    );

  return (
    <div className="w-48 shadow-lg px-5">
      <Link to="/">
        <h1 className="text-lg py-2 flex">
          <svg
            className="h-7 pr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" />
          </svg>
          Home
        </h1>
      </Link>
      <h1 className="text-lg py-2 flex">
        <img
          className="h-7 pr-4"
          src="https://img.icons8.com/material-outlined/24/youtube-shorts.png"
          alt="youtube-shorts"
        />
        Shorts
      </h1>
      <h1 className="text-lg py-2 flex">
        <svg
          className="h-6 pr-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 22q-.825 0-1.412-.587T2 20V10q0-.825.588-1.412T4 8h16q.825 0 1.413.588T22 10v10q0 .825-.587 1.413T20 22zm6-3l6-4l-6-4zM4 7V5h16v2zm3-3V2h10v2z"
          />
        </svg>
        Subscriptions
      </h1>
      <hr></hr>
      <h1 className="font-bold text-lg py-1">You</h1>
      <div className="text-center">
        <ul>
          <li className="py-2">Your Channel</li>
          <li className="py-2">History</li>
          <li className="py-2">Playlists</li>
          <li className="py-2">Watch later</li>
          <li className="py-2">Liked videos</li>
        </ul>
      </div>
      <hr></hr>
      <h1 className="font-bold text-lg py-1">Explore</h1>
      <div className="text-center">
        <ul>
          <li className="py-2">Trending</li>
          <li className="py-2">Music</li>
          <li className="py-2">Gaming</li>
          <li className="py-2">Movies</li>
          <li className="py-2">Sports</li>
          <li className="py-2">Courses</li>
          <li className="py-2">Podcast</li>
          <li>News</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
