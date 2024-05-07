import {
  setAccountSignUpStep,
  setAccountSignUpToContact,
  setAccountSignUpToPassword,
} from "@/store/account";
import { STEP_SIGNUP } from "@/store/account/signup/model";
import { AppDispatch } from "@/store/store";

export const handleBackStep =
  (step: STEP_SIGNUP) => (dispatch: AppDispatch) => {
    if (step === STEP_SIGNUP.CONTACT) {
      const timer = setTimeout(() => dispatch(setAccountSignUpToContact(0)), 0);
      dispatch(setAccountSignUpStep(STEP_SIGNUP.PERSONAL));
      return () => clearTimeout(timer);
    }

    if (step === STEP_SIGNUP.PASSWORD) {
      const timer = setTimeout(
        () => dispatch(setAccountSignUpToPassword(0)),
        0
      );
      dispatch(setAccountSignUpStep(STEP_SIGNUP.CONTACT));
      return () => clearTimeout(timer);
    }
  };
