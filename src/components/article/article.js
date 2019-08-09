import React, { useEffect } from "react";
import { connect } from "react-redux";
import styles from "./styles.css";
import CommentList from "../comment-list";
import { deleteArticle } from "../../ac";
import PropTypes from "prop-types";

function Article({ article, isOpen, onBtnClick, deleteArticle }) {
  useEffect(() => {
    //subscribe
    console.log("subscribe for ", article.id);

    return () => console.log("unsubscribe", article.id);
  }, [article.id]);

  const body = isOpen && (
    <section data-id="article-body">
      <p>{article.text}</p>
      <CommentList comments={article.comments} />
    </section>
  );

  return (
    <div>
      <h3 className={styles.header}>{article.title}</h3>
      <button onClick={() => deleteArticle(article.id)}>Delete me</button>
      {body}
      <button onClick={onBtnClick}>{isOpen ? "hide" : "open"} article</button>
    </div>
  );
}

Article.propTypes = {
  article: PropTypes.object,
  isOpen: PropTypes.bool,
  onBtnClick: PropTypes.func,
  deleteArticle: PropTypes.func
};

export default connect(
  null,
  { deleteArticle }
)(Article);
