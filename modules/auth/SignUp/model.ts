import { z } from "zod";

export const signUpFormSchema = () =>
  z.object({
    firstNameD: z.string().min(1, "Please enter your first name."),
    lastNameD: z.string().min(1, "Please enter your last name."),
    email: z.string().email("Please enter your email correctly."),
    phone: z
      .string()
      .min(10, "Please enter a 10-digit phone number.")
      .max(10, "Please enter a 10-digit phone number."),
      password: z.string().min(8,'Password must have at least 8 characters.'),
      confirmPassword: z.string().min(8,'Password must have at least 8 characters.'),
  }).refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    }
  );

export type SignUpParams = {
  firstNameD: string;
  lastNameD: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export const signUpDefaultValue:SignUpParams =  {
    firstNameD: "",
    lastNameD: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  }