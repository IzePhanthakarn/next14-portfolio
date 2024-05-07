import { createSlice } from "@reduxjs/toolkit";
import { initialAccountState } from "./model";
import { signUpReducer } from "./signup";

export const accountReducer = createSlice({
  name: "account",
  initialState: initialAccountState,
  reducers: {
    ...signUpReducer,
  },
});

export const {
  // signUpReducer
  setAccountSignUpForm,
  setAccountSignUpLoading,
  setAccountSignUpStep,
  setAccountSignUpToContact,
  setAccountSignUpToPassword,
} = accountReducer.actions;

export default accountReducer.reducer;
