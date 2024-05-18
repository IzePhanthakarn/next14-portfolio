declare type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  role: string;
};

declare interface DoughnutChartProps {
  datasets: DatasetChart[];
  labels: string[];
}

declare interface DatasetChart {
  label: string;
  data: number[];
  backgroundColor: string[];
}
declare interface AnimatedCounterProps {
  amount: number;
  prefix?: string;
  decimals?: number;
}