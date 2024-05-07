import CustomTextInput from "@/components/input/CustomTextInput";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactDefaultValue, contactFormSchema, ContactParams } from "./model";
import { Button } from "@/components/ui/button";
import StepProgress from "../../StepProgress";
import { STEP_SIGNUP } from "@/store/account/signup/model";
import { AppDispatch, RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { setAccountSignUpForm, setAccountSignUpStep, setAccountSignUpToPassword } from "@/store/account";
import { handleBackStep } from "../actions";
import { ChevronRight } from "lucide-react";

const ContactForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const step = useSelector((state: RootState) => state.account.signup.step);
  const signupForm = useSelector((state: RootState) => state.account.signup.form);
  const form = useForm({
    resolver: zodResolver(contactFormSchema()),
    defaultValues: contactDefaultValue(signupForm),
    mode: "onBlur",
  });

  const onSubmit = (data: ContactParams) => {
    dispatch(setAccountSignUpForm({ ...signupForm, ...data }));
    const timer1 = setTimeout(
      () => dispatch(setAccountSignUpToPassword(100)),
      100
    );
    const timer2 = setTimeout(
      () => dispatch(setAccountSignUpStep(STEP_SIGNUP.PASSWORD)),
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
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <CustomTextInput
            type="text"
            name="phone"
            label="Phone"
            placeholder="Enter your phone"
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
      <Button
        className="mt-3 w-full bg-transparent hover:bg-transparent border-primary border"
        onClick={() => dispatch(handleBackStep(step))}
      >
        <p className="text-lg uppercase">Back</p>
      </Button>
    </div>
  );
};

export default ContactForm;
