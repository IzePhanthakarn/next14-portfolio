import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { cn } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface CustomInputProps {
  name: string;
  label: string;
  placeholder: string;
  className?: string;
  options: DataOption[];
}

export interface DataOption {
  value: string;
  label: string;
}

const CustomSelect = ({
  name,
  label,
  placeholder,
  className,
  options,
}: CustomInputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="w-full">
          <p>{label}</p>
          <FormItem className={cn("h-12", className)}>
            <div className="flex w-full flex-col mt-1">
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={uuidv4()} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <FormMessage />
          </FormItem>
        </div>
      )}
    />
  );
};

export default CustomSelect;
