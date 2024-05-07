export enum STEP_SIGNUP {
  PERSONAL = "PERSONAL",
  CONTACT = "CONTACT",
  PASSWORD = "PASSWORD",
}

export interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export const initialSignUpForm: SignUpForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export interface SignUpState {
  form: SignUpForm;
  isLoading: boolean;
  step: STEP_SIGNUP;
  toContact: number;
  toPassword: number;
}

export const initialSignUpState: SignUpState = {
  form: initialSignUpForm,
  isLoading: false,
  step: STEP_SIGNUP.PERSONAL,
  toContact: 0,
  toPassword: 0,
};
