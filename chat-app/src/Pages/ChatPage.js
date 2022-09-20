import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("http://localhost:4000/api/chats");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, [chats]);

  return <div>
    {
        chats.map((chat)=>
        {
            return <div>
                {chat.chatName}
            </div>
        })
    }
  </div>;
};
