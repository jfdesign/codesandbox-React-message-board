import React from "react";

export default function Message({ msgItem }) {
  //<div>{msgItem.msg}</div>

  return (
    <div className="message" style={{ paddingBottom: "20px" }}>
      <b>{msgItem.time}</b>
      <br />
      {msgItem.msg}
    </div>
  );
}
