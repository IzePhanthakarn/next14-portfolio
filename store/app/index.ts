import { createSlice } from "@reduxjs/toolkit";
import { initialApp } from "./model";
import { subscriptionReducer } from "./subscription";

export const appReducer = createSlice({
  name: "app",
  initialState: initialApp,
  reducers: {
    ...subscriptionReducer,
  },
});

export const {
  // subscriptionReducer
  setAppSubscriptionDatasets,
  setAppSubscriptionLabels,
  setAppSubscriptionList,
} = appReducer.actions;

export default appReducer.reducer;
