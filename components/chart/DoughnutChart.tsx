"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ datasets, labels }: DoughnutChartProps) => {
  const data = {
    datasets,
    labels
  }
    return <Doughnut data={data} width={250} height={200} options={{
        cutout: '60%',
        plugins: {
            legend: {
                display: true,
                position: 'right'
            },
            
        }
    }} />;
};

export default DoughnutChart;
