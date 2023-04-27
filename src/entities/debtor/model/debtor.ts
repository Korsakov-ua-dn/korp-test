import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchAllDebtors } from './thunks';

import type { IDebtor } from 'shared/api';

type DebtorState = {
  data: IDebtor[];
  loading: boolean;
  error: string | null;
};

const initialState: DebtorState = {
  data: [],
  loading: false,
  error: null,
};

const debtorSlice = createSlice({
  name: 'debtor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllDebtors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllDebtors.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const debtorReducer = debtorSlice.reducer;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
