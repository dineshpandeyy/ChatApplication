import React, {useContext} from 'react'
import { FaVideo, FaPhoneAlt, FaUserPlus } from "react-icons/fa";
import Messages from "./Messages"
import Input from "./Input"
import { ChatContext } from "../context/ChatContext"


const Chat = () => {
  const {data} = useContext(ChatContext);
  return (
    <div className="chat">
        <div className="chatInfo">
            <span>{data.user?.displayName}</span>
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
