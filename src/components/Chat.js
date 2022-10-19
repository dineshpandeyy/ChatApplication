import React from 'react'
import { FaVideo, FaPhoneAlt, FaUserPlus } from "react-icons/fa";
import Messages from "./Messages"
import Input from "./Input"


const Chat = () => {
  return (
    <div className="chat">
        <div className="chatInfo">
            <span>Benzema</span>
            <div className="icons">
              <FaPhoneAlt />
              <FaVideo />
              <FaUserPlus />
            </div> 
        </div>
        <Messages />
        <Input /> 
    </div>
  )
}
export default Chat
