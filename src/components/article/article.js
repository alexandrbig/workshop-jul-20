import React, { useEffect } from "react";
import styles from "./styles.css";

function Article({ article, isOpen, onBtnClick }) {
  useEffect(() => {
    //subscribe
    console.log("subscribe for ", article.id);

    return () => console.log("unsubscribe", article.id);
  }, [article.id]);

  const body = isOpen && (
    <section>
      <p>{article.text.split("").join(" ")}</p>
    </section>
  );

  return (
    <div>
      <h3 className={styles.header}>{article.title}</h3>
      {body}
      <button onClick={onBtnClick}>{isOpen ? "hide" : "open"} article</button>
    </div>
  );
}

export default Article;
