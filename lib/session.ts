import { jwtDecode } from "jwt-decode";
import { AUTH } from "@/constants";
import { AppDispatch } from "@/store/store";
import { GetAccessToken } from "@/services/session";

export const setSesstion = (accessToken: string, refreshToken: string) => {
  const { exp: expAccessToken } = jwtDecode<{ exp: number }>(accessToken);
  const { exp: expRefreshToken } = jwtDecode<{ exp: number }>(refreshToken);

  const { timeLeftAccessToken, timeLeftRefreshToken } = checkTokenDateExpired(
    expAccessToken,
    expRefreshToken
  );

  if (timeLeftAccessToken !== 0) {
    setToken(AUTH.ACCESS_TOKEN, accessToken);
  }

  if (timeLeftRefreshToken !== 0) {
    setToken(AUTH.REFRESH_TOKEN, refreshToken);
  }
};

export const checkTokenDateExpired = (
  expAccessToken: number,
  expRefreshToken: number
) => {
  const currentTime = Date.now() / 1000;

  const timeLeftAccessToken = expAccessToken - currentTime;
  const timeLeftRefreshToken = expRefreshToken - currentTime;

  return { timeLeftAccessToken, timeLeftRefreshToken };
};

export const checkTokenExpired = () => async (dispatch: AppDispatch) => {
  const accessToken = getToken(AUTH.ACCESS_TOKEN);
  const refreshToken = getToken(AUTH.REFRESH_TOKEN);
  if (accessToken && refreshToken) {
    const { exp: expAccessToken } = jwtDecode<{ exp: number }>(accessToken);
    const { exp: expRefreshToken } = jwtDecode<{ exp: number }>(refreshToken);

    const { timeLeftAccessToken, timeLeftRefreshToken } = checkTokenDateExpired(
      expAccessToken,
      expRefreshToken
    );

    if (timeLeftRefreshToken <= 0) {
      if (typeof localStorage !== "undefined") {
        localStorage.clear();
      }
      return (window.location.href = "/signin");
    }

    if (timeLeftAccessToken <= 0) {
      const accessToken = await dispatch(handleAccessTokenExpired());
      setToken(AUTH.ACCESS_TOKEN, accessToken);
    }
  }
  return false;
};

const handleAccessTokenExpired = () => async (dispatch: AppDispatch) => {
  const response = await dispatch(GetAccessToken());
  const { accessToken } = response.payload.data;
  return accessToken;
};

export const setToken = (token: string, value: string) => {
  return localStorage.setItem(token, value);
};

export const getToken = (token: string) => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem(token);
  }
};

export const getSession = () => async (dispatch: AppDispatch) => {
  const isTokenExpired = await dispatch(checkTokenExpired());
  if (!isTokenExpired) {
    const accessToken = getToken(AUTH.ACCESS_TOKEN);
    if (accessToken) {
      const user = jwtDecode<User>(accessToken);
      return user;
    }
  }
  return null;
};
