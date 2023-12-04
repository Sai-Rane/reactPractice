import { buyBook } from "./BookTypes";

//hume action ko banane ke liye ek action banane vala bhi chahiye. Aur action banane vale ko hum kehte hai Action creator jo ki ek function hota hai and that function returns us our action. In this case purchaseBook is the Action creator and is returning us the action in form of buyBook
const purchaseBook = () => {
  return {
    type: buyBook,
  };
};

// We mostly try to keep the type as a constant so we have created a file for that and then we are exporting it from BookAction.js
