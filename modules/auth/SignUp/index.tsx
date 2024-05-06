import CustomTextInput from "@/components/input/CustomTextInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signUpFormSchema, SignUpParams, signUpDefaultValue } from "./model";
import CustomPasswordInput from "@/components/input/CustomPasswordInput";
import Link from "next/link";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(signUpFormSchema()),
    defaultValues: signUpDefaultValue,
    mode: "onBlur",
  });

  const {
    formState: { isValid },
  } = form;

  const onSubmit = async (data: SignUpParams) => {
    console.log("data >", data);
  };

  return (
    <section className="px-6 py-10 w-[768px] space-y-6">
      <header className="space-y-4 border-l-4 border-primary pl-3">
        <h1 className="text-2xl">Sign Up</h1>
        <p>Enter your details below to create your account and get started.</p>
      </header>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-4 w-full">
            <CustomTextInput
              type="text"
              name="firstName"
              className="w-full"
              label="First Name"
              placeholder="Enter your first name"
            />
            <CustomTextInput
              type="text"
              name="lastName"
              className="w-full"
              label="Last Name"
              placeholder="Enter your last name"
            />
          </div>
          <div className="flex gap-4 w-full">
            <CustomTextInput
              type="text"
              name="email"
              className="w-full"
              label="Email"
              placeholder="example@mail.com"
            />
            <CustomTextInput
              type="text"
              name="phone"
              className="w-full"
              label="Phone"
              placeholder="Enter your phone"
            />
          </div>
          <div className="flex gap-4 w-full">
            <CustomPasswordInput
              type="password"
              name="password"
              className="w-full"
              label="Password"
              placeholder="Enter your password"
            />
            <CustomPasswordInput
              type="password"
              name="confirmPassword"
              className="w-full"
              label="Confirm password"
              placeholder="Confirm your password"
            />
          </div>

          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              disabled={!isValid || isLoading}
              className="mt-4 h-14 bg-primary"
            >
              {isLoading ? (
                <div className="text-lg flex items-center">
                  <Loader2 size={24} className="animate-spin" /> &nbsp;
                  Loading...
                </div>
              ) : (
                <p className="text-lg uppercase">Sign Up</p>
              )}
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2 pt-5">
            <p>Already have an account?</p>
            <Link
              className="underline-offset-3 text-primary hover:underline"
              href="/signin"
            >
              Sign In
            </Link>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default SignUp;
