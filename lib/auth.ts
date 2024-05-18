import { postSignIn } from "@/services/session";
import { SigninDTO } from "@/services/session/model";
import { AppDispatch } from "@/store/store";
import _ from "lodash";
import { setSesstion } from "./session";

export const signin =
  (formData: SigninDTO) => async (dispatch: AppDispatch) => {
    const tokenData = await dispatch(postSignIn(formData));
    if (_.get(tokenData, "error.message") === "Rejected") {
      return false;
    } else {
      const data = tokenData.payload.data;
      const accessToken = data.accessToken;
      const refreshToken = data.refreshToken;
      setSesstion(accessToken, refreshToken);
      return true;
    }
  };
