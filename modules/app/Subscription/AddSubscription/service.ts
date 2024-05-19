import { formatDate } from "@/lib/date";
import { postSubscriptionAdd } from "@/services/app/subscription";
import { SubscriptionDTO } from "@/services/app/subscription/model";
import { AppDispatch } from "@/store/store";
import { toast } from "sonner";

export const addSubscription =
  (formData: SubscriptionDTO) => async (dispatch: AppDispatch) => {
    const response = await dispatch(postSubscriptionAdd(formData));
    const dataResponse = response.payload;
    if (dataResponse.success === false) {
      toast.error(dataResponse.message);
      return false;
    } else {
      const now = new Date();
      toast.success(dataResponse.message, {
        description: formatDate(now),
      });
      return true;
    }
  };