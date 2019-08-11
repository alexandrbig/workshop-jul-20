import uuid from "uuid";

export default store => next => action => {
  const { generateId, ...rest } = action;

  if (generateId) {
    next({
      ...rest,
      id: uuid.v4()
    });
  } else {
    next(action);
  }
};
