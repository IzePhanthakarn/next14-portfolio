import { z } from "zod";

export const signInFormSchema = () =>
  z.object({
    email: z.string().email("Please enter your email correctly."),
    password: z.string().min(8, "Password must have at least 8 characters."),
  });

export type SignInParams = {
  email: string;
  password: string;
};

export const signInDefaultValue: SignInParams = {
  email: "",
  password: "",
};
