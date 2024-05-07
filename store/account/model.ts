import { initialSignUpState, SignUpState } from "./signup/model";

export interface AccountState {
  signup: SignUpState;
}

export const initialAccountState: AccountState = {
  signup: initialSignUpState,
};
