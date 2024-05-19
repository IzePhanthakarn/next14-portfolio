import { PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../model'
import { SubscriptionDTO } from '@/services/app/subscription/model'


export const subscriptionReducer = {
  setAppSubscriptionDatasets: (state: AppState, action: PayloadAction<Dataset[]>) => {
    state.subscription.datasets = action.payload
  },

  setAppSubscriptionLabels: (state: AppState, action: PayloadAction<string[]>) => {
    state.subscription.labels = action.payload
  },

  setAppSubscriptionList: (state: AppState, action: PayloadAction<SubscriptionDTO[]>) => {
    state.subscription.list = action.payload
  },
}
