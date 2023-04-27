import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { debtorReducer } from 'entities/debtor';

const rootReducer = combineReducers({
  debtor: debtorReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
