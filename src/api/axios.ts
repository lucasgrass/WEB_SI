import StorageService from '@portal/services/storage';
import Axios, { AxiosError, AxiosResponse } from 'axios';

export enum AxiosStatus {
  Unauthorized = 401,
  Forbidden = 403,
}

interface IHandler {
  unauthorizedError: () => void;
}

const handler: IHandler = {
  unauthorizedError: () => {},
};

export const getInstance = async () => {
  const accessToken = await StorageService.getItem('TOKEN');

  const axiosInstance = Axios.create({
    baseURL: 'http://localhost:4547',
    timeout: 10000,
    headers: {
      'content-Type': 'application/json',
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
  });

  axiosInstance.interceptors.request.use((request) => {
    console.log(request);
    return request;
  });

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log(response);
      return response;
    },
    async (err: AxiosError) => {
      if (err.response?.status === AxiosStatus.Unauthorized) {
        handler.unauthorizedError();
      } else if (err.response?.status === AxiosStatus.Forbidden) {
        // your mechanism to forbidden
      }

      return Promise.reject();
    }
  );

  return axiosInstance;
};

export const setHandleUnauthorizedError = (fn: () => void) => {
  handler.unauthorizedError = fn;
};

export default getInstance;
