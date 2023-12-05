//this a normal js file. To convert this in Redux Store, Redux provides us a method called as createStore
import { createStore } from "redux";
import bookReducer from "./BookReducer";

//createStore method accepts a reducer as a parameter
const store = createStore(bookReducer);

export default store;
