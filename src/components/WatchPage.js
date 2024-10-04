import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [searchParam] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col w-full">
      <div className="px-5 py-3 flex">
        <div>
          <iframe
            className="rounded-2xl"
            width="940"
            height="500"
            src={"https://www.youtube.com/embed/" + searchParam.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
