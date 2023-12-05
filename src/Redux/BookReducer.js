import { buyBook } from "./BookTypes";

//Creating state
const initialState = {
  NumberOfBooks: 20,
};

//Now lets create our Reducer
const bookReducer = (state = initialState, action) => {
  console.log("action", action, state);
  //inside reducer we generally write switch statement
  switch (action.type) {
    case buyBook:
      return {
        ...state,
        NumberOfBooks: state.NumberOfBooks - 1,
      };
    default:
      return state;
  }
};

export default bookReducer;
