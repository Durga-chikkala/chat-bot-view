
import React, { useState } from "react";
import Chatbot from "../Chatbot/Chatbot";

function Chat() {
  const [messages, setMessages] = useState([]);

  
  const sendMessage = async (text) => {
    const response = await fetch("http://localhost:8000/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: text }),
    });

    const data = await response.json();
    setMessages((prevMessages) => [...prevMessages, data]);
  };

  return (
    <div className="chat">
      <Chatbot messages={messages} onSendMessage={sendMessage} />
    </div>
  );
}

export default Chat;
