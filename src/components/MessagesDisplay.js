import React from "react";
import Message from "./Message";

export default function MessagesDisplay({ messages, messagesLoaded }) {
  function getMessages() {
    if (messagesLoaded) {
      return messages.map(function(msgItem, i) {
        return <Message key={i} msgItem={msgItem} />;
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  return (
    <div
      className="msgsC"
      style={{
        background: "#ccc",
        width: "55%",
        float: "right",
        padding: "20px"
      }}
    >
      <h2>Messages</h2>

      {getMessages()}
    </div>
  );
}
