import { createAsyncThunk } from "@reduxjs/toolkit";
import { SubscriptionDTO } from "./model";
import { BASE_URL_API } from "@/config";
import API_PATH from "@/constants/api";
import axios from "axios";
import { getToken } from "@/lib/session";
import { AUTH } from "@/constants";

// Get Subscription
export const getSubscription = createAsyncThunk(
  "GetSubscription/get",
  async (_, thunkAPi) => {
    try {
      const accessToken = getToken(AUTH.ACCESS_TOKEN);
      const response = await axios.get(
        `${BASE_URL_API}${API_PATH.APP.SUBSCRIPTION.GET}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return thunkAPi.rejectWithValue([]);
    }
  }
);

// Add Subscription
export const postSubscriptionAdd = createAsyncThunk(
  "AddSubscription/post",
  async (params: SubscriptionDTO, thunkAPi) => {
    try {
      const accessToken = getToken(AUTH.ACCESS_TOKEN);
      const response = await axios.post(
        `${BASE_URL_API}${API_PATH.APP.SUBSCRIPTION.ADD}`,
        params,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return thunkAPi.rejectWithValue([]);
    }
  }
);

// Edit Subscription
export const putSubscriptionEdit = createAsyncThunk(
  "EditSubscription/put",
  async (params: SubscriptionDTO, thunkAPi) => {
    try {
      const accessToken = getToken(AUTH.ACCESS_TOKEN);
      const response = await axios.put(
        `${BASE_URL_API}${API_PATH.APP.SUBSCRIPTION.EDIT}`,
        params,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      return thunkAPi.rejectWithValue([]);
    }
  }
);
