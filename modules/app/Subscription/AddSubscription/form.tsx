import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  dataOption,
  subscriptionDefaultValue,
  subscriptionFormSchema,
} from "./model";
import { SubscriptionDTO } from "@/services/app/subscription/model";
import { Form } from "@/components/ui/form";
import CustomTextInput from "@/components/input/CustomTextInput";
import CustomSelect from "@/components/input/CustomSelect";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Dispatch } from "redux";

const FormComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(subscriptionFormSchema()),
    defaultValues: subscriptionDefaultValue,
    mode: "onBlur",
  });

  const {
    formState: { isValid },
  } = form;

  const onSubmit = async (data: SubscriptionDTO) => {
    console.log("data >", data);
  };

  return (
    <Form {...form}>
      <form className="space-y-3 mt-4" onSubmit={form.handleSubmit(onSubmit)}>
        <CustomTextInput
          type="text"
          name="name"
          label="Name"
          className="h-10"
          placeholder="name"
        />

        <CustomTextInput
          type="text"
          name="amount"
          label="Amount"
          className="h-10"
          placeholder="amount"
        />

        <CustomTextInput
          type="text"
          name="tag"
          label="Tag"
          className="h-10"
          placeholder="tag"
        />

        <CustomSelect
          name="status"
          label="Status"
          className="h-10"
          placeholder="status"
          options={dataOption}
        />

        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              className="mt-4"
              disabled={isLoading || !isValid}
            >
              Add Subscription
            </Button>
          </SheetClose>
        </SheetFooter>
      </form>
    </Form>
  );
};

export default FormComponent;
