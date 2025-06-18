import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/Cart/cartSlice";
import productSlice from "../Features/Product/productSlice";
import wishListSlice from "../Features/Wishlist/wishListSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishListSlice,
    product: productSlice,
  },
});

export default store;
