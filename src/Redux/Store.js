//this a normal js file. To convert this in Redux Store, Redux provides us a method
import { createStore } from "redux";
import bookReducer from "./BookReducer";

const store = createStore(bookReducer);

export default store;
