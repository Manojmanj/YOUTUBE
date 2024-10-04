import React from "react";
import ButtonList from "./ButtonList";
import SearchVideoContainer from "./SearchVideoContainer";
import Sidebar from "./Sidebar";

const Container = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div>
        <ButtonList />
        <SearchVideoContainer />
      </div>
    </div>
  );
};

export default Container;
