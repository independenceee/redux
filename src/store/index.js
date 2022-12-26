import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart";
import modalReducer from "../features/modal";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

export default store;
