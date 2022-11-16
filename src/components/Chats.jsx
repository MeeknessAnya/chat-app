import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";

const Chats = () => {
  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { data, dispatch } = useContext(ChatContext);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        console.log(currentUser.uid);
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = async (u) => {
    await updateDoc(doc(db, "userChats", u.userInfo.uid), {
      // [data.chatId + ".lastMessage"]: u?.lastMessage,
      // [data.chatId + ".date"]: u?.date,
      [data.chatId + ".read"]: true
    });
    console.log("Updated")
    dispatch({ type: "CHANGE_USER", payload: u.userInfo });
  };

  return (
    <div className="chats">
      {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => handleSelect(chat[1])}
        >{chat[1].userInfo && <>
          <img src={chat[1].userInfo?.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            {console.log(chat)}
            {chat[1].read == false ? <span className="new">NEW</span> : <></>}
            <p>{chat[1].lastMessage?.text}</p>
          </div>
        </>
          }
        </div>
      ))}
    </div>
  );
};

export default Chats;