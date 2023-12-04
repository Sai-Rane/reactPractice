import { buyBook } from "./BookTypes";

//Creating state
const initialState = {
  NumberOfBooks: 20,
};

//Now lets create our Reducer
const bookReducer = (state = initialState, action) => {
  //inside reducer we generally write switch statement
  switch (action.type) {
    case buyBook:
      return {
        ...state,
        NumberOfBooks: state.initialState - 1,
      };
    default:
      return state;
  }
};

export default bookReducer;
