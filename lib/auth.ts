import { postSignIn, postSignUp } from "@/services/session";
import { SigninDTO, SignupDTO } from "@/services/session/model";
import { AppDispatch } from "@/store/store";
import _ from "lodash";
import { setSesstion } from "./session";
import { toast } from "sonner";
import { formatDate } from "./date";

export const signin =
  (formData: SigninDTO) => async (dispatch: AppDispatch) => {
    const response = await dispatch(postSignIn(formData));
    const dataResponse = response.payload;
    if (dataResponse.success === false) {
      toast.error(dataResponse.message);
      return false;
    } else {
      const data = dataResponse.data;
      const accessToken = data.accessToken;
      const refreshToken = data.refreshToken;
      setSesstion(accessToken, refreshToken);
      const now = new Date();
      toast.success(dataResponse.message, {
        description: formatDate(now),
      });
      return true;
    }
  };

export const signup =
  (formData: SignupDTO) => async (dispatch: AppDispatch) => {
    const response = await dispatch(postSignUp(formData));
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

export const logout = () => {
  if (typeof localStorage !== "undefined") {
    localStorage.clear();
    window.location.href = "/signin";
  }
};
