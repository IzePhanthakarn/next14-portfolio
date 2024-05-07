import { SignUpForm } from "@/store/account/signup/model";
import { z } from "zod";

export const passwordFormSchema = () =>
  z
    .object({
      password: z.string().min(8, "Password must have at least 8 characters."),
      confirmPassword: z
        .string()
        .min(8, "Password must have at least 8 characters."),
    })
    .refine(
      (values) => {
        return values.password === values.confirmPassword;
      },
      {
        message: "Passwords don't match",
        path: ["confirmPassword"],
      }
    );

export type PasswordParams = {
  password: string;
  confirmPassword: string;
};

export const passwordDefaultValue = (
  signupForm: SignUpForm
): PasswordParams => {
  return {
    password: signupForm.password,
    confirmPassword: signupForm.confirmPassword,
  };
};
