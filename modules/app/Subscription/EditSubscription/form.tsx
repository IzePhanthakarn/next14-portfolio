import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { dataOption, subscriptionFormSchema } from "./model";
import { SubscriptionDTO } from "@/services/app/subscription/model";
import { Form } from "@/components/ui/form";
import CustomTextInput from "@/components/input/CustomTextInput";
import CustomSelect from "@/components/input/CustomSelect";
import { SheetClose, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { AppDispatch, RootState } from "@/store/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { editSubscription } from "./service";
import { IconLoader2 } from "@tabler/icons-react";
import _ from "lodash";

const FormComponent = ({ selectedIndex }: { selectedIndex: number }) => {
  const dispatch: AppDispatch = useDispatch();
  const { list } = useSelector(
    (state: RootState) => ({
      list: state.app.subscription.list,
    }),
    shallowEqual
  );
  const dataSelect = list.find((item) => item.index === selectedIndex);
  const closeRef = React.useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(subscriptionFormSchema()),
    defaultValues: dataSelect,
    mode: "onBlur",
  });

  const {
    formState: { isValid },
  } = form;

  const onSubmit = async (data: SubscriptionDTO) => {
    setIsLoading(true);
    const response = await dispatch(editSubscription(data));
    if (response) {
      closeRef.current?.click();
      window.location.reload();
    }
    setIsLoading(false);
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
          placeholder="Tag Color"
        />

        <CustomSelect
          name="status"
          label="Status"
          className="h-10"
          placeholder="status"
          options={dataOption}
        />

        <div className="flex justify-end">
          <Button
            type="submit"
            className="mt-2"
            disabled={isLoading || !isValid}
          >
            {isLoading ? (
              <div className="flex items-center">
                <IconLoader2 size={24} className="animate-spin" /> &nbsp;
                Loading...
              </div>
            ) : (
              <p>Save Subscription</p>
            )}
          </Button>
        </div>

        <SheetFooter className="hidden">
          <SheetClose asChild>
            <div ref={closeRef}>Close</div>
          </SheetClose>
        </SheetFooter>
      </form>
    </Form>
  );
};

export default FormComponent;
