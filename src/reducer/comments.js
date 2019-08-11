import { normalizedComments } from "../fixtures";
import { arrToMap } from "../utils";
import { POST_COMMENT } from "../constants";

const defaultComments = arrToMap(normalizedComments);

export default (commentsState = defaultComments, action) => {
  const { type, payload, id } = action;

  switch (type) {
    case POST_COMMENT:
      return {
        ...commentsState,
        [id]: { ...payload, id }
      };
    default:
      return commentsState;
  }
};
