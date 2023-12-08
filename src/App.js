import React from "react";
import { Provider } from "react-redux";
// import Controlled from "./ControlledComponent/Form";
// import Uncontrolled from "./ControlledComponent/Uncontrolled";
// import Hook from "./CustomHook/Hook";
// import Redux from "./Redux/Redux";
import store from "./Redux/Store";
// import Route1 from "./Router/Route1";
import ToDo from "./ToDoList/ToDo";
// import Counter from "./UseReducerNew/Counter";
// import UseStateWithArray from "./useState/UseStateWithArray";
// import Callback from "./UseCallback/Callback";
// import Context from "./UseContext/Context";
// import UseStateWithObject from "./useState/UseStateWithObject";
// import Memo from "./UseMemo/Memo";
// import Usereducer from "./useReducer/Usereducer";
// import Usestate from "./useState/Usestate";
// import Form from "./RegistrationPage/Form";
// import Parent from "./LiftingStateUp/Parent";
// import Ref from "./UseRef/Ref";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Usereducer /> */}
        {/* <Usestate /> */}
        {/* <Form /> */}
        {/* <Parent /> */}
        {/* <Ref /> */}
        {/* <Memo /> */}
        {/* <Callback /> */}
        {/* <Context /> */}
        {/* <UseStateWithObject /> */}
        {/* <UseStateWithArray /> */}
        {/* <Redux /> */}
        {/* <Counter /> */}
        {/* <Hook /> */}
        {/* <Controlled /> */}
        {/* <Uncontrolled /> */}
        {/* <Route1 /> */}
        <ToDo />
      </div>
    </Provider>
  );
}

export default App;
