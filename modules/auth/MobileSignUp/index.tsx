"use client";

import Link from "next/link";
import PersonalForm from "./Form/PersonalForm";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { STEP_SIGNUP } from "@/store/account/signup/model";
import ContactForm from "./Form/ContactForm";
import PasswordForm from "./Form/PasswordForm";
import { cn } from "@/lib/utils";

const MobileSignUp = () => {
  const step = useSelector((state: RootState) => state.account.signup.step);
  const isLoading = useSelector(
    (state: RootState) => state.account.signup.isLoading
  );
  return (
    <section className="px-3 sm:px-6 py-6 sm:py-10 sm:w-[640px] lg:w-[768px]">
      <header className="mb-6 space-y-4 border-l-4 border-primary pl-3">
        <h1 className="text-2xl">Sign Up</h1>
        <p className="text-sm">
          Enter your details below to create your account and get started.
        </p>
      </header>
      {step === STEP_SIGNUP.PERSONAL && <PersonalForm />}
      {step === STEP_SIGNUP.CONTACT && <ContactForm />}
      {step === STEP_SIGNUP.PASSWORD && <PasswordForm />}

      <div className="mt-2 flex items-center justify-center space-x-2 pt-3">
        <p>Already have an account?</p>
        <Link
          className={cn("underline-offset-3 text-primary hover:underline", {
            "text-primary-dark pointer-events-none": isLoading,
          })}
          href="/signin"
        >
          Sign In
        </Link>
      </div>
    </section>
  );
};

export default MobileSignUp;
