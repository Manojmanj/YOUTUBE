import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const list = [
  "All",
  "live",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "News",
  "Valentine",
  "Comedy",
  "Drama",
  "Coding",
  "Action Movies",
  "F1 Racing",
  "New Tech",
  "Concert dances",
  "Recently Uploaded",
];

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`flex ${
        isMenuOpen ? "w-[calc(100vw-12rem)]" : "w-[calc(100vw-9rem)]"
      } h-12 overflow-x-auto space-x-2 no-scrollbar`}
    >
      {list.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
