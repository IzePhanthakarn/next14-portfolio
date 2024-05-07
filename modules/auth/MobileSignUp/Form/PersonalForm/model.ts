import { SignUpForm } from "@/store/account/signup/model";
import { z } from "zod";

export const personalFormSchema = () =>
  z.object({
    firstName: z.string().min(1, "Please enter your first name."),
    lastName: z.string().min(1, "Please enter your last name."),
  });

export type PersonalParams = {
  firstName: string;
  lastName: string;
};

export const personalDefaultValue = (
  signupForm: SignUpForm
): PersonalParams => {
  return {
    firstName: signupForm.firstName,
    lastName: signupForm.lastName,
  };
};
