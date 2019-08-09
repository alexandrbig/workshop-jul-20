import { DELETE_ARTICLE, INCREMENT, APPLY_FILTERS } from "../constants";

export const increment = () => ({
  type: INCREMENT
});

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  payload: { id }
});

export const filterArticles = filters => ({
  type: APPLY_FILTERS,
  payload: { filters }
});
