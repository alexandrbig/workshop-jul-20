import {
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION,
  DELETE_ARTICLE,
  INCREMENT,
  POST_COMMENT
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

export const postComment = (comment, articleId) => ({
  type: POST_COMMENT,
  payload: { ...comment },
  articleId,
  generateId: true
});
