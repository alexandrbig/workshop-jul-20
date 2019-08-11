import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles.css";
import CommentList from "../comment-list";
import { deleteArticle, fetchArticleById } from "../../ac";

export function Article({
  article,
  isOpen,
  onBtnClick,
  deleteArticle,
  fetchArticleById
}) {
  const body = isOpen && (
    <section data-id="article-body">
      {article.isLoading && <h3>Loading...</h3>}
      <p>{article.text}</p>
      <CommentList article={article} />
    </section>
  );

  useEffect(() => {
    if (isOpen) {
      fetchArticleById(article.id);
    }
  }, [article.id, isOpen]);

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
  {
    deleteArticle,
    fetchArticleById
  }
)(Article);
