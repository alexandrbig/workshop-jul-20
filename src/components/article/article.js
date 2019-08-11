import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles.css";
import CommentList from "../comment-list";
import { deleteArticle } from "../../ac";

export function Article({ article, isOpen, onBtnClick, deleteArticle }) {
  const body = isOpen && (
    <section data-id="article-body">
      <p>{article.text}</p>
      <CommentList comments={article.comments} articleId={article.id} />
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
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string
  })
};

export default connect(
  null,
  { deleteArticle }
)(Article);
