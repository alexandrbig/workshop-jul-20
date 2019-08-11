import {
  ADD_COMMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  DELETE_ARTICLE,
  FETCH_ALL_ARTICLES,
  INCREMENT
} from "../constants";

export const increment = () => ({
  type: INCREMENT
});

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  payload: { id }
});

export const changeDateRange = dateRange => ({
  type: CHANGE_DATE_RANGE,
  payload: { dateRange }
});

export const changeSelection = selected => ({
  type: CHANGE_SELECTION,
  payload: { selected }
});

export const addComment = (comment, articleId) => ({
  type: ADD_COMMENT,
  payload: { comment, articleId },
  generateId: true
});

export const fetchAllArticles = () => ({
  type: FETCH_ALL_ARTICLES,
  callAPI: "/api/article"
});
