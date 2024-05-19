import { SubscriptionDTO } from "@/services/app/subscription/model";

export interface SubscriptionState {
  datasets: Dataset[];
  labels: string[];
  list: SubscriptionDTO[];
}

export const initialSubscriptionState: SubscriptionState = {
  datasets: [],
  labels: [],
  list: [],
};
