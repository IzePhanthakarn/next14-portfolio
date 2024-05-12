declare type User = {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
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
