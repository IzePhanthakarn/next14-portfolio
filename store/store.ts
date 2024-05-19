import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./account";
import appReducer from "./app";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    app: appReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
