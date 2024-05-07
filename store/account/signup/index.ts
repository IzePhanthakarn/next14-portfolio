import { PayloadAction } from '@reduxjs/toolkit'
import { AccountState } from '../model'
import { SignUpForm, SignUpState, STEP_SIGNUP } from './model'
import { setAccountSignUpForm } from '..'

export const signUpReducer = {
  setAccountSignUpForm: (state: AccountState, action: PayloadAction<SignUpForm>) => {
    state.signup.form = action.payload
  },
  setAccountSignUpLoading: (state: AccountState, action: PayloadAction<boolean>) => {
    state.signup.isLoading = action.payload
  },
  setAccountSignUpStep: (state: AccountState, action: PayloadAction<STEP_SIGNUP>) => {
    state.signup.step = action.payload
  },
  setAccountSignUpToContact: (state: AccountState, action: PayloadAction<number>) => {
    state.signup.toContact = action.payload
  },
  setAccountSignUpToPassword: (state: AccountState, action: PayloadAction<number>) => {
    state.signup.toPassword = action.payload
  },
}
