import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  setPhoneEmail,
  setStep1,
  setStep2,
  setStep3,
} from '../src/redux/slices/setProfile';

const rootReducer = combineReducers({
  setPhoneEmail,
  setStep1,
  setStep2,
  setStep3,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
