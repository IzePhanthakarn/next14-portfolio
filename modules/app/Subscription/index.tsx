"use client";

import _ from "lodash";
import { useEffect } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";
import AddSubscription from "./AddSubscription";
import DoughnutChart from "@/components/chart/DoughnutChart";
import DataTable from "./DataTable";
import { Card } from "@/components/ui/card";
import { AppDispatch, RootState } from "@/store/store";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getSubscriptionFunction, transformData } from "./service";
import { SubscriptionDTO } from "@/services/app/subscription/model";
import {
  setAppSubscriptionDatasets,
  setAppSubscriptionLabels,
  setAppSubscriptionList,
} from "@/store/app";

const Subscription = () => {
  const dispatch: AppDispatch = useDispatch();
  const { subscription } = useSelector(
    (state: RootState) => ({
      subscription: state.app.subscription,
    }),
    shallowEqual
  );

  useEffect(() => {
    const fetchSubscription = async () => {
      const dataSubscription = await dispatch(getSubscriptionFunction());
      const dataSubscriptionIncludeId = dataSubscription.map(
        (item: SubscriptionDTO, index: number) => {
          return { ...item, index: index + 1 };
        }
      );
      if (!_.isEmpty(dataSubscriptionIncludeId)) {
        const { labels, datasets } = transformData(dataSubscriptionIncludeId);
        dispatch(setAppSubscriptionList(dataSubscriptionIncludeId));
        dispatch(setAppSubscriptionLabels(labels));
        dispatch(setAppSubscriptionDatasets(datasets));
      }
    };

    fetchSubscription();
  }, [dispatch]);

  if (_.isEmpty(subscription.list)) return;
  if (_.isEmpty(subscription.labels)) return;
  if (_.isEmpty(subscription.datasets)) return;

  return (
    <div className="px-4 space-y-1">
      <header className="flex justify-between py-2">
        <h1 className="text-2xl font-medium">Subscription</h1>
        <AddSubscription />
      </header>
      <div className="h-full flex-grow w-full space-y-4">
        <div className="flex gap-4">
          <Card className="flex space-x-4 p-4">
            <div className="w-full">
              <DoughnutChart
                labels={subscription.labels}
                datasets={subscription.datasets}
              />
            </div>

            <div className="h-full border"></div>
            <div className="w-full flex flex-col gap-3 py-4">
              <h2 className="text-xl">
                Subscription: {subscription.datasets[0].data.length}
              </h2>
              <div className="flex flex-col gap-2">
                <p className="text-lg">Total Subscription Balance</p>
                <div className="text-2xl 3xl:text-3xl border-l-4 border-primary pl-4 py-2 flex-center gap-2">
                  <AnimatedCounter
                    prefix="฿"
                    amount={_.sum(subscription.datasets[0].data)}
                  />
                </div>
              </div>
            </div>
          </Card>
          <Card className="w-72 aspect-square flex flex-col justify-between p-4">
            <h2 className="text-xl">Total Yearly</h2>
            <div className="text-2xl 3xl:text-3xl border-l-4 border-primary pl-4 py-2 flex-center gap-2">
              <AnimatedCounter
                prefix="฿"
                amount={_.sum(subscription.datasets[0].data) * 12}
              />
            </div>
            <p>This is the total yearly cost.</p>
            <hr className="border" />
            <h2 className="text-xl">Total Daily</h2>
            <div className="text-2xl 3xl:text-3xl border-l-4 border-primary pl-4 py-2 flex-center gap-2">
              <AnimatedCounter
                prefix="฿"
                amount={_.sum(subscription.datasets[0].data) / 30}
              />
            </div>
            <p>This is the total daily cost.</p>
          </Card>
        </div>
        <Card className="h-[calc(100vh-440px)] 3xl:h-[calc(100vh-460px)] w-full space-y-2 p-4">
          <DataTable />
        </Card>
      </div>
    </div>
  );
};

export default Subscription;
