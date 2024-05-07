import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const StepProgress = () => {
  const step = useSelector((state: RootState) => state.account.signup.step);
  const toContact = useSelector(
    (state: RootState) => state.account.signup.toContact
  );
  const toPassword = useSelector(
    (state: RootState) => state.account.signup.toPassword
  );
  return (
    <div className="flex items-center justify-between w-full relative mt-3">
      <div className="h-5 w-5 bg-primary rounded-full z-20" />
      <Progress value={toContact} className="w-1/2 h-2 z-10 absolute left-0" />
      <div
        className={cn("h-5 w-5 bg-white rounded-full z-20", {
          "bg-primary": ["CONTACT", "PASSWORD"].includes(step),
        })}
      />
      <Progress
        value={toPassword}
        className="w-1/2 h-2 z-10 absolute right-0"
      />
      <div
        className={cn("h-5 w-5 bg-white rounded-full z-20", {
          "bg-primary": step === "PASSWORD",
        })}
      />
    </div>
  );
};

export default StepProgress;
