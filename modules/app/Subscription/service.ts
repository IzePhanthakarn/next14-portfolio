import { getSubscription } from "@/services/app/subscription";
import { SubscriptionDTO } from "@/services/app/subscription/model";
import {
  setAppSubscriptionDatasets,
  setAppSubscriptionLabels,
  setAppSubscriptionList,
} from "@/store/app";
import { AppDispatch } from "@/store/store";
import _ from "lodash";

export const getSubscriptionFunction = () => async (dispatch: AppDispatch) => {
  const response = await dispatch(getSubscription());
  const dataResponse = response.payload;
  if (dataResponse.success === false) {
    return [];
  } else {
    return dataResponse.data.subscription;
  }
};

export const transformData = (subscriptions: SubscriptionDTO[]): ChartData => {
  const labels: string[] = [];
  const data: number[] = [];
  const backgroundColor: string[] = [];

  subscriptions.forEach((subscription) => {
    labels.push(subscription.name);
    data.push(subscription.amount);
    backgroundColor.push(subscription.tag);
  });

  const datasets: Dataset[] = [
    {
      label: "Price",
      data: data,
      backgroundColor: backgroundColor,
    },
  ];

  return { labels, datasets };
};

export const fetchSubscription = () => async (dispatch: AppDispatch) => {
  const dataSubscription = await dispatch(getSubscriptionFunction());
  if (!_.isEmpty(dataSubscription)) {
    const { labels, datasets } = transformData(dataSubscription);
    dispatch(setAppSubscriptionList(dataSubscription));
    dispatch(setAppSubscriptionLabels(labels));
    dispatch(setAppSubscriptionDatasets(datasets));
  }
};
