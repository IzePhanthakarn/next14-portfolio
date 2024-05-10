import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface CustomInputProps {
  name: string;
  label: string;
  placeholder: string;
}

const CustomPasswordInput = ({
  name,
  label,
  placeholder,
}: CustomInputProps) => {
  const { control } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="w-full">
          <p>{label}</p>
          <div className="flex w-full flex-col mt-1">
            <FormControl>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  className="hide-password-toggle pr-10 h-12"
                  placeholder={placeholder}
                  id={name}
                  autoComplete="off"
                  {...field}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full text-slate-500 hover:text-primary px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeOffIcon className="h-5 w-5" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </Button>

                {/* hides browsers password toggles */}
                <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
              </div>
            </FormControl>
            <FormMessage className="mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomPasswordInput;
