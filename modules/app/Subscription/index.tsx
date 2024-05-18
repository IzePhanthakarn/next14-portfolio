"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import DoughnutChart from "@/components/chart/DoughnutChart";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconPlus } from "@tabler/icons-react";
import _ from "lodash";
import { DataTableDemo } from "./data-table";
import * as React from "react";

const Subscription = () => {
  const labels = ["Youtube", "3BB", "Netflix", "Prime Video", "AIS"];
  const datasets = [
    {
      label: "Price",
      data: [130, 499, 50, 27.25, 235],
      backgroundColor: ["#FF0000", "#f7941d", "#E50914", "#3c78b4", "#bddf19"],
    },
  ];

  return (
    <div className="px-4 space-y-1">
      <header className="flex justify-between py-2">
        <h1 className="text-2xl font-medium">Subscription</h1>
        <Button className="space-x-1" variant="success">
          <IconPlus size={20} />
          <p>Add Subscription</p>
        </Button>
      </header>
      <div className="h-full flex-grow w-full space-y-4">
        <div className="flex gap-4">
          <Card className="flex space-x-4 p-4">
            <div className="w-full">
              <DoughnutChart labels={labels} datasets={datasets} />
            </div>

            <div className="h-full border"></div>
            <div className="w-full flex flex-col gap-3 py-4">
              <h2 className="text-xl">
                Subscription: {datasets[0].data.length}
              </h2>
              <div className="flex flex-col gap-2">
                <p className="text-lg">Total Subscription Balance</p>
                <div className="text-2xl 3xl:text-3xl border-l-4 border-primary pl-4 py-2 flex-center gap-2">
                  <AnimatedCounter
                    prefix="฿"
                    amount={_.sum(datasets[0].data)}
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
                amount={_.sum(datasets[0].data) * 12}
              />
            </div>
            <p>This is the total yearly cost.</p>
            <hr className="border" />
            <h2 className="text-xl">Total Daily</h2>
            <div className="text-2xl 3xl:text-3xl border-l-4 border-primary pl-4 py-2 flex-center gap-2">
              <AnimatedCounter
                prefix="฿"
                amount={_.sum(datasets[0].data) / 30}
              />
            </div>
            <p>This is the total daily cost.</p>
          </Card>
        </div>
        <Card className="h-[calc(100vh-440px)] 3xl:h-[calc(100vh-460px)] w-full space-y-2 p-4">
          <h1 className="text-xl">Data Subscription</h1>
          <DataTableDemo />
        </Card>
      </div>
    </div>
  );
};

export default Subscription;
