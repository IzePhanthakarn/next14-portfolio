"use client";

import CustomTextInput from "@/components/input/CustomTextInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInFormSchema, signInDefaultValue } from "./model";
import CustomPasswordInput from "@/components/input/CustomPasswordInput";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { setAccountSignUpLoading } from "@/store/account";
import { cn } from "@/lib/utils";
import { IconLoader2 } from "@tabler/icons-react";
import { signin } from "@/lib/auth";
import { SigninDTO } from "@/services/session/model";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const dispatch: AppDispatch = useDispatch();
  const route = useRouter();
  const isLoading = useSelector(
    (state: RootState) => state.account.signup.isLoading
  );

  const form = useForm({
    resolver: zodResolver(signInFormSchema()),
    defaultValues: signInDefaultValue,
    mode: "onBlur",
  });

  const onSubmit = async (data: SigninDTO) => {
    dispatch(setAccountSignUpLoading(true));
    const response = await dispatch(signin(data));
    if (response) {
      dispatch(setAccountSignUpLoading(false));
      route.push('/app/dashboard')
    }
  };

  return (
    <section className="px-3 sm:px-6 py-6 sm:py-10 sm:w-[480px] space-y-6">
      <header className="space-y-4 border-l-4 border-primary pl-3">
        <h1 className="text-2xl">Sign In</h1>
        <p className="text-base">Welcome back !!</p>
      </header>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <CustomTextInput
            type="text"
            name="email"
            label="Email"
            placeholder="example@mail.com"
          />

          <CustomPasswordInput
            name="password"
            label="Password"
            placeholder="Enter your password"
          />

          <div className="flex flex-col gap-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="mt-4 sm:h-14 bg-primary"
            >
              {isLoading ? (
                <div className="text-lg flex items-center">
                  <IconLoader2 size={24} className="animate-spin" /> &nbsp;
                  Loading...
                </div>
              ) : (
                <p className="text-lg uppercase">Sign In</p>
              )}
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-2 pt-5">
            <p>Don&apos;t have an account yet?</p>
            <Link
              className={cn("underline-offset-3 text-primary hover:underline", {
                "text-primary-dark pointer-events-none": isLoading,
              })}
              href="/signup"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default SignIn;
