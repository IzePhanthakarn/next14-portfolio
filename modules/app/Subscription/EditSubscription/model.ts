import { DataOption } from "@/components/input/CustomSelect";
import { SubscriptionDTO } from "@/services/app/subscription/model";
import { z } from "zod";

export const subscriptionFormSchema = () =>
  z.object({
    id: z.number(),
    name: z.string().trim().min(1, "Please enter your subscription name"),
    amount: z.coerce.number().positive(),
    tag: z.string().startsWith("#").length(7),
    status: z.string(),
  });

export const subscriptionDefaultValue: SubscriptionDTO = {
  index: 0,
  id: 0,
  name: "",
  amount: 0,
  tag: "",
  status: "ACTIVE",
};

export const dataOption: DataOption[] = [
  { value: "ACTIVE", label: "Active" },
  { value: "INACTIVE", label: "Inactive" },
];
