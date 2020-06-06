const INITIAL_STATE = {
  searchedIndex: [],
};

export const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_SEARCHED_INDEX_PENDING":
      return { ...state, searchedIndex: {} };
    case "GET_SEARCHED_INDEX_FULFILLED":
      console.log(action.payload);
      return { ...state, searchedIndex: action.payload };

    default:
      return state;
      break;
  }
};
