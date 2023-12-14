import { configureStore } from '@reduxjs/toolkit';

import setProfile from '../src/redux/slices/setProfile';

export const store = configureStore({
  reducer: {
    setProfile: setProfile,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
