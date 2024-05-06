"use client";

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
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const MobileSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState("PERSONAL_DATA");
  const [toContact, setToContact] = useState(0);
  const [toPassword, setToPassword] = useState(0);

  const form = useForm({
    resolver: zodResolver(signUpFormSchema()),
    defaultValues: signUpDefaultValue,
    mode: "onBlur",
  });

  const {
    watch,
    formState: { isValid },
  } = form;
  const values = watch();

  const onSubmit = async (data: SignUpParams) => {
    console.log("data >", data);
  };

  const handleNextStep = () => {
    console.log("step >", step);
    if (step === "PERSONAL_DATA") {
      setToContact(100);
      const timer = setTimeout(() => setStep("CONTACT"), 100);
      return () => clearTimeout(timer);
    }
    if (step === "CONTACT") {
      setToPassword(100);
      const timer = setTimeout(() => setStep("PASSWORD"), 100);
      return () => clearTimeout(timer);
    }
  };

  const handleBackStep = () => {
    if (step === "CONTACT") {
      const timer = setTimeout(() => setToContact(0), 0);
      setStep("PERSONAL_DATA")
      return () => clearTimeout(timer);
    }
    if (step === "PASSWORD") {
      const timer = setTimeout(() => setStep("CONTACT"), 200);
      setToPassword(0);
      return () => clearTimeout(timer);
    }
  };
  console.log("step >", step);

  return (
    <section className="px-3 sm:px-6 py-6 sm:py-10 sm:w-[640px] lg:w-[768px] space-y-6">
      <header className="space-y-4 border-l-4 border-primary pl-3">
        <h1 className="text-2xl">Sign Up</h1>
        <p className="text-sm">
          Enter your details below to create your account and get started.
        </p>
      </header>
      <Form {...form}>
        <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
          <div
            className={cn("hidden flex-col sm:flex-row gap-2 sm:gap-4 w-full", {
              flex: step === "PERSONAL_DATA",
            })}
          >
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
          <div
            className={cn("hidden flex-col sm:flex-row gap-4 w-full", {
              flex: step === "CONTACT",
            })}
          >
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
          <div
            className={cn("hidden flex-col sm:flex-row gap-4 w-full", {
              flex: step === "PASSWORD",
            })}
          >
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
          <div className="flex items-center justify-between w-full relative">
            <div className="h-5 w-5 bg-primary rounded-full z-20" />
            <Progress
              value={toContact}
              className="w-1/2 h-2 z-10 absolute left-0"
            />
            <div
              className={cn("h-5 w-5 bg-white rounded-full z-20", {
                "bg-primary": ["CONTACT", "PASSWORD"].includes(step),
              })}
            />
            <Progress
              value={toPassword}
              className="w-1/2 h-2 z-10 absolute right-0"
            />
            <div
              className={cn("h-5 w-5 bg-white rounded-full z-20", {
                "bg-primary": step === "PASSWORD",
              })}
            />
          </div>

          <div
            className={cn("flex flex-col gap-4", {
              flex: step === "PASSWORD",
            })}
          >
            <Button
              type="submit"
              disabled={!isValid || isLoading}
              className="mt-4 sm:h-14 bg-primary"
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
        </form>
      </Form>
      <div className={cn("flex flex-col", { hidden: step === "PASSWORD" })}>
        <Button className="mt-4 w-full" onClick={() => handleNextStep()}>
          <p className="text-lg uppercase">
            {step !== "PASSWORD" && "Next Step"}
          </p>
        </Button>
      </div>
      <Button
          className={cn("mt-4 w-full bg-transparent hover:bg-transparent border-primary border",{'hidden':step === 'PERSONAL_DATA' })}
          onClick={() => handleBackStep()}
        >
          <p className="text-lg uppercase">Back</p>
        </Button>
      <div className="flex items-center justify-center space-x-2 pt-3">
        <p>Already have an account?</p>
        <Link
          className="underline-offset-3 text-primary hover:underline"
          href="/signin"
        >
          Sign In
        </Link>
      </div>
    </section>
  );
};

export default MobileSignUp;
