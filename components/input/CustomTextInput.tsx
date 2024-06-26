import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

interface CustomInputProps {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  className?: string;
}

const CustomTextInput = ({
  name,
  label,
  type,
  placeholder,
  className,
}: CustomInputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="w-full">
          <p>{label}</p>
          <div className="flex w-full flex-col mt-1">
            <FormControl>
              <Input
                placeholder={placeholder}
                id={name}
                className={cn("h-12", className)}
                type={type}
                autoComplete="off"
                {...field}
              />
            </FormControl>
            <FormMessage className="mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomTextInput;
