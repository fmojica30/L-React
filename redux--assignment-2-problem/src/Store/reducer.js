import * as actionTypes from "./actions";

const initialState = {
  persons: []
};

const personsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PERSON:
      console.log(state);
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: "Max",
        age: Math.floor(Math.random() * 40)
      };
      const newArr = [...state.persons];
      newArr.push(newPerson);
      return {
        persons: newArr
      };

    case actionTypes.DELETE_PERSON:
      const deletedPersonArray = state.persons.filter(
        person => person.id !== action.personId
      );
      return {
        persons: deletedPersonArray
      };

    default:
      return state;
  }
};

export default personsReducer;
