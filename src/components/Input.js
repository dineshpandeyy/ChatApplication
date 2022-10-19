import React from 'react'
import { FaPaperclip, FaUpload} from "react-icons/fa";


const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something...."/>
      <div className="send">
        {/* <input type="file" style={{display: "none"}} id="file"/> */}
        <div className="uploader">
          <FaPaperclip className="paperclip"/>
          <FaUpload/>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Input