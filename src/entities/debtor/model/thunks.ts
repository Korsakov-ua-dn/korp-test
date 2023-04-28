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
>('debtor/GET_ALL', async (_, { rejectWithValue }) => {
  try {
    const response = await debtorAPI.getAll();

    if (!isArray(response.data)) {
      return rejectWithValue('Не корректный ответ сервера');
    }

    return response.data;
  } catch (err) {
    return rejectWithValue(
      'Произошла ошибка, попробуйте перезагрузить страницу'
    );
  }
});

/**
 * Thunk
 * @returns Возвращает нового должника или ошибку
 */
export const addDebtor = createAsyncThunk<
  IDebtor,
  Partial<IDebtor>,
  { rejectValue: string; state: RootState }
>('debtor/ADD', async (payload, { rejectWithValue }) => {
  try {
    const response = await debtorAPI.add(payload);

    // type guard server responce
    if (!isDebtor(response.data)) {
      return rejectWithValue('Не корректный ответ сервера');
    }

    return response.data;
  } catch (err) {
    return rejectWithValue('Произошла ошибка, попробуйте еще раз');
  }
});

/**
 * Thunk
 * @returns Возвращает обновленного должника или ошибку
 */
export const updateDebtor = createAsyncThunk<
  IDebtor,
  IDebtor,
  { rejectValue: string; state: RootState }
>('debtor/CHANGE_STATUS', async (payload, { rejectWithValue }) => {
  try {
    const response = await debtorAPI.update(payload);

    // type guard server responce
    if (!isDebtor(response.data)) {
      return rejectWithValue('Не корректный ответ сервера');
    }

    return response.data;
  } catch (err) {
    return rejectWithValue('Произошла ошибка, попробуйте еще раз');
  }
});
