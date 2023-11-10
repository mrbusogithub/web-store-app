import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Importing the cart reducer

// To configure the Redux store with the cart reducer
const store = configureStore({
  reducer: {
    cart: cartReducer, // To combine the cart reducer under the 'cart' slice
  },
});

export default store; // Exporting the configured Redux store
