import { SignUpForm } from "@/store/account/signup/model";
import { z } from "zod";

export const contactFormSchema = () =>
  z.object({
    email: z.string().email("Please enter your email correctly."),
    phone: z
      .string()
      .min(10, "Please enter a 10-digit phone number.")
      .max(10, "Please enter a 10-digit phone number."),
  });

export type ContactParams = {
  email: string;
  phone: string;
};

export const contactDefaultValue = (signupForm: SignUpForm): ContactParams => {
  return {
    email: signupForm.email,
    phone: signupForm.phone,
  };
};
