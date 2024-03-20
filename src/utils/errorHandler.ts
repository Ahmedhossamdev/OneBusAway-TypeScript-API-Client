import axios, { AxiosInstance, AxiosError } from 'axios';

export class ApiError extends Error {
  code: number;
  text: string;
  version: number;
  currentTime: string;

  constructor(code: number, text: string, version: number, currentTime: string) {
    super(text);
    this.code = code;
    this.text = text;
    this.version = version;
    this.currentTime = currentTime;
  }
}

function handleCommonErrors(error: AxiosError<any>) {
  if (error.response?.data) {
    if (error.response.data === null) {
      throw new Error('The Response Data is null. Please try again later.');
    }
    if (error instanceof ApiError) {
      console.error(`API Error: ${error.text} (code: ${error.code})`);
    } else {
      // Handle generic error
      console.error(error.message);
    }
    return error.response.data;
  }
  return null;
}

export const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<any>) => {
    try {
      const responseData = handleCommonErrors(error);
      return Promise.reject(responseData || error);
    } catch (error: any) {
      return Promise.reject(error.response?.data || null);
    }
  },
);
