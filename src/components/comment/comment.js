import React from "react";
import style from "./comment.css";

export default function Comment({ id, user, text }) {
  return (
    <div className={style.comment}>
      <div className={style.user}>{user}</div>
      <p className={style.text}>{text}</p>
    </div>
  );
}
