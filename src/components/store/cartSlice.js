import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Array to store cart items
    totalPrice: 0, // Total price of items in the cart
    itemCount: 0, // Number of items in the cart
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
      state.totalPrice += action.payload.price;
      state.itemCount += 1;
    },
    removeFromCart: (state, action) => {
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (removedItem) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.totalPrice -= removedItem.price;
        state.itemCount -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
