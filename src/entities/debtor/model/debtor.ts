import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { addDebtor, fetchAllDebtors, updateDebtor } from './thunks';

import type { IDebtor } from 'shared/api';

type DebtorState = {
  data: IDebtor[];
  loading: boolean;
  error: string | null;
};

const initialState: DebtorState = {
  data: [],
  loading: true,
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
      .addCase(addDebtor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addDebtor.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(updateDebtor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDebtor.fulfilled, (state, action) => {
        state.data = state.data.map((debtor) =>
          debtor._id === action.payload._id ? action.payload : debtor
        );
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
