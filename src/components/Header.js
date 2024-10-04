import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  /**
   * {
   *    "iphone" : ["iphone 11", "iphone 12"]
   * }
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: [json[1]],
      })
    );
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    navigate(`/searchVideoContainer/${suggestion}`); // Navigate to the new route with the suggestion
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col h-14 p-2 shadow-lg">
      <div className="flex col-span-1 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-7 px-2 cursor-pointer active:bg-black"
          alt="menu"
          src="https://tse4.mm.bing.net/th?id=OIP.LZ8bpRJ-svj1Cved1W0rgQHaHa&pid=Api&P=0&h=180"
        />
        <a href="/">
          <img
            className="h-7 mx-3 cursor-pointer"
            alt="youtube-logo"
            src="https://tse1.mm.bing.net/th?id=OIP.7a0BMI-EP29BboGKeyb-AgHaBp&pid=Api&P=0&h=180"
          />
        </a>
      </div>
      <div className="col-span-10 pl-28">
        <div>
          <input
            className="w-7/12 border border-gray-400 py-2 px-5  rounded-l-full"
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white w-[550px] rounded-lg shadow-2xl border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-3 py-1 flex items-center shadow-sm hover:bg-gray-200"
                  onMouseDown={() => handleSuggestionClick(s)}
                >
                  <img
                    className="h-5 pr-1"
                    src="https://img.icons8.com/ios-filled/50/search--v1.png"
                    alt="search--v1"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          className="h-10 col-span-1"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
