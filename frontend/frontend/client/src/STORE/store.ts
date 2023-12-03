import { configureStore } from "@reduxjs/toolkit";
import { CategorySlice } from "./features/categorySlice";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ProductSlice } from "./features/productSlice";
import { CartSlice } from "./features/cartSlice";
import { AuthSlice } from "./features/authSlice";

export const store = configureStore({
    reducer: {
        category: CategorySlice.reducer,
        product: ProductSlice.reducer,
        cart: CartSlice.reducer,
        auth: AuthSlice.reducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch; 
//export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;