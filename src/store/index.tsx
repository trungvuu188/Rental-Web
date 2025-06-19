import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import themeSlice from "./slices/themeSlice";
import productsSlice from "./slices/productsSlice";
import wishListSlice from "../Features/Wishlist/wishListSlice";
import cartSlice from "../Features/Cart/cartSlice";
import productSlice from "../Features/Product/productSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        theme: themeSlice,
        products: productsSlice,
        cart: cartSlice,
        wishlist: wishListSlice,
        product: productSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;