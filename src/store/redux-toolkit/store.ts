import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import imageReducer from "./imageSlice";
import filterTypeReducer from "./filterTypeSlice";
import viewedReducer from "./viewedSlice";
import { loadState } from "@/components/common/browser-storage";
import filterBrandReducer from "./filterBrand";
import paginationReducer from "./paginationSlice";
import filterPriceReducer from "./filterPrice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    image: imageReducer,
    filterType: filterTypeReducer,
    filterPrice: filterPriceReducer,
    viewed: viewedReducer,
    filterBrand: filterBrandReducer,
    pagination: paginationReducer,
  },
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;