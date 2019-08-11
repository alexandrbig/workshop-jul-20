import { DELETE_ARTICLE, POST_COMMENT } from "../constants";
import { normalizedArticles } from "../fixtures";
import { arrToMap } from "../utils";

const defaultArticles = arrToMap(normalizedArticles);

export default (articles = defaultArticles, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return articles.filter(article => article.id !== payload.id);
    case POST_COMMENT:
      const { articleId, id } = action;
      return {
        ...articles,
        [articleId]: {
          ...articles[articleId],
          comments: [...(articles[articleId].comments || []), id]
        }
      };

    default:
      return articles;
  }
};
