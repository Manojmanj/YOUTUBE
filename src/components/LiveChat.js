import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomComment, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    //API Polling
    const i = setInterval(() => {
      // console.log("api");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomComment(),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-4  w-full h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className=" w-full p-2 ml-4 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Manoj (me)",
              message: liveMessage,
            })
          );

          setLiveMessage("");
        }}
      >
        <input
          className="p-1 w-[340px]"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-4 mx-2 bg-green-200 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
