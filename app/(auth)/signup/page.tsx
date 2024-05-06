"use client";

import SignUp from "@/modules/auth/SignUp";
import MobileSignUp from "@/modules/auth/MobileSignUp";

const SignUpPage = () => {
  return (
    <>
      <div className="block sm:hidden">
        <MobileSignUp />
      </div>
      <div className="hidden sm:block">
        <SignUp />
      </div>
    </>
  );
};

export default SignUpPage;
