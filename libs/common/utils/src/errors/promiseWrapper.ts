import { Nullable } from '../types';

type PromiseWrapperResponse<E extends Error, Res> = [error: Nullable<E>, response: Nullable<Res>];

export const promiseWrapper = async <E extends Error, Res>(promise: Promise<Res>): Promise<PromiseWrapperResponse<E, Res>>  => {
  try {
    const response = await promise;

    return [null, response];
  } catch (error) {
    return [error, null];
  }
}
