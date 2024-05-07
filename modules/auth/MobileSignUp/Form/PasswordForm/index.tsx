import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  passwordDefaultValue,
  passwordFormSchema,
  PasswordParams,
} from "./model";
import { Button } from "@/components/ui/button";
import { handleBackStep } from "../actions";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setAccountSignUpForm, setAccountSignUpLoading } from "@/store/account";
import StepProgress from "../../StepProgress";
import CustomPasswordInput from "@/components/input/CustomPasswordInput";
import { Loader2 } from "lucide-react";

const PasswordForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const step = useSelector((state: RootState) => state.account.signup.step);
  const signupForm = useSelector(
    (state: RootState) => state.account.signup.form
  );
  const isLoading = useSelector(
    (state: RootState) => state.account.signup.isLoading
  );
  const form = useForm({
    resolver: zodResolver(passwordFormSchema()),
    defaultValues: passwordDefaultValue(signupForm),
    mode: "onBlur",
  });

  const onSubmit = (data: PasswordParams) => {
    dispatch(setAccountSignUpForm({ ...signupForm, ...data }));
    dispatch(setAccountSignUpLoading(true));
  };
  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col sm:flex-row gap-2 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <CustomPasswordInput
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <CustomPasswordInput
            name="confirmPassword"
            label="Confirm password"
            placeholder="Confirm your password"
          />
          <StepProgress />
          <Button
            disabled={isLoading}
            type="submit"
            className="mt-4 sm:h-14 bg-primary text-lg uppercase"
          >
            {isLoading ? (
              <div className="flex items-center">
                <Loader2 size={24} className="animate-spin" /> &nbsp; Loading...
              </div>
            ) : (
              <p>Sign Up</p>
            )}
          </Button>
        </form>
      </Form>
      <Button
        className="mt-3 w-full bg-transparent hover:bg-transparent border-primary border"
        onClick={() => dispatch(handleBackStep(step))}
        disabled={isLoading}
      >
        <p className="text-lg uppercase">Back</p>
      </Button>
    </div>
  );
};

export default PasswordForm;
