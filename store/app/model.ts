import {
  initialSubscriptionState,
  SubscriptionState,
} from "./subscription/model";

export interface AppState {
  subscription: SubscriptionState;
}

export const initialApp: AppState = {
  subscription: initialSubscriptionState,
};