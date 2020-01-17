import * as actionTypes from "../actions";

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      const newArr = [...state.results];
      newArr.push({ id: new Date(), value: action.result });
      return {
        ...state,
        results: newArr
      };
    case actionTypes.DELETE_RESULT:
      // const newArr = [...state.results];
      // newArr.results.splice(id, 1);
      const id = 2;
      const updatedArray = state.results.filter(el => el.id !== action.id);
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
