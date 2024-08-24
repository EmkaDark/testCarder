import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./DataState/DataSlice";
const store = configureStore({
  reducer: { cardsArr: cardReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
