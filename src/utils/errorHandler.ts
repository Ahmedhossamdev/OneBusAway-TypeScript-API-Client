import axios, { AxiosInstance, AxiosError } from 'axios';
import createError from 'http-errors';
import { ErrorResponse } from '../common/ErrorResponse';
import logger from './../logger/logger'; // import a logger
import { ApiResponse } from '../common/ApiRepsonse';

function handleCommonErrors(error: AxiosError<any>) {
  if (error.response?.data) {
    return error.response.data; // Return the error response data
  }
}

// Create a reusable Axios instance with interceptors
const axiosInstance: AxiosInstance = axios.create();

// Add a response interceptor

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<any>) => {
    const responseData = handleCommonErrors(error);
    return Promise.reject(responseData || error);
  },
);

export default axiosInstance;
