import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter + 1;
    },
    decrement(state, action) {
      state.counter - 1;
    },
    addBy(state, action) {
      state.counter + action.payload;
    },
  },
});

export const actions = counterSlice.action;4

const store = configureStore({
  reducers: counterSlice.reducers,
});


export default store;