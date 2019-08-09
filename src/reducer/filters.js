import { APPLY_FILTERS } from "../constants";

export default (filters = {}, action) => {
  const { type, payload } = action;
  console.log(payload);

  switch (type) {
    case APPLY_FILTERS:
      return { ...filters, ...payload.filters };

    default:
      return filters;
  }
};
