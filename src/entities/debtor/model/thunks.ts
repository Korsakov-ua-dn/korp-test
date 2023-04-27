import { createAsyncThunk } from '@reduxjs/toolkit';

import { IDebtor, debtorAPI } from 'shared/api';
import { isArray } from 'shared/type-guard';

import { isDebtor } from '../lib';

/**
 * Thunk
 * @returns Возвращает массив должников полученных из API или ошибку
 */
export const fetchAllDebtors = createAsyncThunk<
  IDebtor[],
  undefined,
  { rejectValue: string; state: RootState }
>('transactions/GET_ALL', async (_, { rejectWithValue }) => {
  try {
    const response = await debtorAPI.getAll();

    if (!isArray(response.data) || !isDebtor(response.data[0])) {
      return rejectWithValue('Не корректный ответ сервера');
    }

    return response.data;
  } catch (err) {
    return rejectWithValue(
      'Произошла ошибка, попробуйте перезагрузить страницу'
    );
  }
});
