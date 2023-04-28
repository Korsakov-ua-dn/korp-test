import { axiosInstance } from '../base';

import { END_POINT } from './config';
import { IDebtor } from './models';

import type { AxiosPromise } from 'axios';

export const getAll = (params?: {
  limit?: number;
  skip?: number;
}): AxiosPromise<IDebtor[]> => {
  return axiosInstance.get(END_POINT, { params });
};

export const add = (payload: Partial<IDebtor>): AxiosPromise<IDebtor> => {
  return axiosInstance.post(END_POINT, payload);
};

export const update = (payload: IDebtor): AxiosPromise<IDebtor> => {
  return axiosInstance.put(END_POINT, payload);
};
