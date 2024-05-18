import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconPlus } from "@tabler/icons-react";
import FormComponent from "./form";

const AddSubscription = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="space-x-1" variant="success">
          <IconPlus size={20} />
          <p>Add Subscription</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Subscription</SheetTitle>
          <SheetDescription>
            Add a subscription To plan and view statistics on spending money on
            subscriptions each month.
          </SheetDescription>
        </SheetHeader>
        <FormComponent />
      </SheetContent>
    </Sheet>
  );
};

export default AddSubscription;
