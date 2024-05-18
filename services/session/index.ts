import { createAsyncThunk } from "@reduxjs/toolkit";
import { SigninDTO, SignupDTO } from "./model";
import axios from "axios";
import { BASE_URL_API } from "@/config";
import API_PATH from "@/constants/api";
import { getToken } from "@/lib/session";
import { AUTH } from "@/constants";

// Sign Up
export const postSignUp = createAsyncThunk(
  "PostSignIn/post",
  async (params: SignupDTO, thunkAPi) => {
    try {
      const response = await axios.post(
        `${BASE_URL_API}${API_PATH.AUTH.SIGN_UP}`,
        params
      );
      return response.data;
    } catch (err) {
      return thunkAPi.rejectWithValue([]);
    }
  }
);

// Sign In
export const postSignIn = createAsyncThunk(
  "PostSignIn/post",
  async (params: SigninDTO, thunkAPi) => {
    try {
      const response = await axios.post(
        `${BASE_URL_API}${API_PATH.AUTH.SIGN_IN}`,
        params
      );
      return response.data;
    } catch (err) {
      return thunkAPi.rejectWithValue([]);
    }
  }
);

// Get Access Token
export const GetAccessToken = createAsyncThunk(
  "PostSignIn/post",
  async (_, thunkAPi) => {
    try {
      const refreshToken = getToken(AUTH.REFRESH_TOKEN);
      const response = await axios.get(
        `${BASE_URL_API}${API_PATH.AUTH.GET_ACCESS_TOKEN}`,
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return thunkAPi.rejectWithValue([]);
    }
  }
);
