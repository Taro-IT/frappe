import { Nullable } from "../utils"

type WrapErrorResponse<E extends Error, Res> = [Nullable<E>, Nullable<Res>];

export const wrapError = async <E extends Error, Res>(promise: Promise<Res>): Promise<WrapErrorResponse<E, Res>> => {
  try {
    const response = await promise;

    return [null, response];
  } catch (error) {
    return [error as E, null];
  }
}
