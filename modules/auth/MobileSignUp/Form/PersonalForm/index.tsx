import CustomTextInput from "@/components/input/CustomTextInput";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  personalDefaultValue,
  personalFormSchema,
  PersonalParams,
} from "./model";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  setAccountSignUpForm,
  setAccountSignUpStep,
  setAccountSignUpToContact,
} from "@/store/account";
import StepProgress from "../../StepProgress";
import { STEP_SIGNUP } from "@/store/account/signup/model";

const PersonalForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const signupForm = useSelector(
    (state: RootState) => state.account.signup.form
  );
  const form = useForm({
    resolver: zodResolver(personalFormSchema()),
    defaultValues: personalDefaultValue(signupForm),
    mode: "onBlur",
  });

  const onSubmit = (data: PersonalParams) => {
    dispatch(setAccountSignUpForm({ ...signupForm, ...data }));
    const timer1 = setTimeout(
      () => dispatch(setAccountSignUpToContact(100)),
      100
    );
    const timer2 = setTimeout(
      () => dispatch(setAccountSignUpStep(STEP_SIGNUP.CONTACT)),
      450
    );

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col sm:flex-row gap-2 w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <CustomTextInput
            type="text"
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
          />
          <CustomTextInput
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
          />
          <StepProgress />
          <Button
            type="submit"
            className="mt-4 bg-primary text-lg uppercase space-x-1"
          >
            <p>Next Step</p>
            <ChevronRight color="#fff" />
          </Button>
        </form>
      </Form>
      <div className="mt-3 w-full h-10"></div>
    </div>
  );
};

export default PersonalForm;
