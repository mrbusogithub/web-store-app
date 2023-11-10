import { createSlice } from "@reduxjs/toolkit";

// To define a slice for managing the cart state
const cartSlice = createSlice({
  name: "cart", // Slice name
  initialState: {
    items: [], // Array to store cart items
    totalPrice: 0, // Total price of items in the cart
    itemCount: 0, // Number of items in the cart
  },
  reducers: {
    // Reducer function to handle adding an item to the cart
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]; // To add the new item to the cart
      state.totalPrice += action.payload.price; // To update the total price
      state.itemCount += 1; // To increment the item count
    },
    // Reducer function to handle removing an item from the cart
    removeFromCart: (state, action) => {
      // To find the item to be removed
      const removedItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (removedItem) {
        // To remove the item from the cart
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        // To update the total price and item count
        state.totalPrice -= removedItem.price;
        state.itemCount -= 1;
      }
    },
  },
});

// To export action creators and the reducer
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
