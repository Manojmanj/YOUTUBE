import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-8 col-span-1"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/000/550/731/original/user-icon-vector.jpg"
      />
      <span className="font-bold text-sm px-2">{name}</span>
      <span className="text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
