import axios, { AxiosInstance, AxiosError } from 'axios';

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
