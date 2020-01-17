import * as actionTypes from "../actions";

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state); //This is one way to do it
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      //This is a second way to do it with copies
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.val
      };
    case actionTypes.SUBTRACT:
      return {
        ...state,
        counter: state.counter - action.val
      };
    default:
      return state;
  }
};

export default reducer;
