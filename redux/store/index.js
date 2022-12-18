import { createStore } from "redux";

const reducerFunction = function (
  state = {
    counter: 0,
  },
  action
) {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  return state;
};

// ***

const initialState = {
  counter: 0,
};
const reducer = function (state = initialState, action) {
  switch (action.type) {
    case "INC":
      state.counter + 1;
      break;
    case "DEC":
      state.counter - 1;
      break;
    case "ADD":
      state.counter + 10;
      break;
    default:
      break;
  }
  return counter;
};

const store = createStore(reducerFunction);

export default store;
