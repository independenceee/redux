import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsList: [],
  totalQuantity: 0,
  showCart: false,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: function (state, action) {
      state.changed = true;
      const newItem = action.payload;

      const existingItem = state.itemsList.find(function (item) {
        return item.id === newItem.id;
      });
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity++;
      }
    },

    remoteFromCart: function (state, action) {
      state.changed = true;
      const id = action.payload;

      const existingItem = state.itemsList.find(function (item) {
        return item.is === id;
      });
      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(function (item) {
          return item.id !== id;
        });
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    setShowCart: function (state, action) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
