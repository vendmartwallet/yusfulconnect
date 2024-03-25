import React from 'react'
import { IoMdChatboxes } from "react-icons/io";

const ChatBox = () => {
  return (
    <div className="fixed bottom-8 right-6 bg-[#fff] bg-transparent rounded-full flex items-center justify-center p-2">
    <div className="animate-float">
      <a href="mailto:blackdappconnect@gmail.com">
      <IoMdChatboxes size="53" color="#6366F1"/>
      </a>
    </div>
  </div>
  )
}

export default ChatBox