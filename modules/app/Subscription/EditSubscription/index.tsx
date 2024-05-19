import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconEdit } from "@tabler/icons-react";
import FormComponent from "./form";

const EditSubscription = ({ selectedIndex }: { selectedIndex: number }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="h-8 rounded w-full space-x-1" variant="info">
          <IconEdit size={16} />
          <p>Edit</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Subscription</SheetTitle>
          <SheetDescription>
            Edit a subscription to change data and view statistics on spending
            money on subscriptions each month.
          </SheetDescription>
        </SheetHeader>
        <FormComponent selectedIndex={selectedIndex} />
      </SheetContent>
    </Sheet>
  );
};

export default EditSubscription;
