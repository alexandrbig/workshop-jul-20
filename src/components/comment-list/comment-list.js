import React from "react";
import Comment from "../comment";
import toggler from "../../decorators/toggler";

function CommentList({ commentList, articleId, isOpen, toggleState }) {
  if (!commentList || !commentList.length) return null;

  return (
    <div>
      <button onClick={toggleState}>{isOpen ? "hide" : "show"} comments</button>
      <div>
        {isOpen && commentList.map(item => <Comment key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default toggler(CommentList);
