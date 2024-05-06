import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";

interface CustomInputProps {
    name: string;
    className?: string;
    label: string;
    type: string;
    placeholder: string;
  }

const CustomTextInput = ({
    name,
    className,
    label,
    type,
    placeholder,
  }: CustomInputProps) => {
    const { control } = useFormContext()
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <div className={className}>
            <p>{label}</p>
            <div className="flex w-full flex-col">
              <FormControl>
                <Input
                  placeholder={placeholder}
                  id={name}
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