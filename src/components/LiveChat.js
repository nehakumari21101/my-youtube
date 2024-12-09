import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomText } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //Api Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(20) + "🚀",
        })
      );
    }, 500);

    return () => clearInterval(i);
  });

  return (
    <>
      <div className="flex text-center w-[400px] h-[400px] border ml-5 p-2 bg-slate-100 rounded-xl overflow-y-scroll flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="border mx-5 mt-2 py-1"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Emma",
              message: liveMessage,
            })
          );
          setLiveMessage(" ");
        }}
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
            
            console.log(e.target.value);
          }}
          className="border border-black w-56 mx-3 rounded-2xl py-1 px-2"
        />
        <button className="bg-green-200 " type="submit">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
