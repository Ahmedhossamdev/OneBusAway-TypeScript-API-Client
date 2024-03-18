import axios, { AxiosInstance, AxiosError } from 'axios';
import createError from 'http-errors';
import { ErrorResponse } from '../common/ErrorResponse';
import logger from './../logger/logger'; // import a logger

class BadRequestError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'BadRequestError';
  }
}

class UnauthorizedError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

class ForbiddenError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'ForbiddenError';
  }
}

class NotFoundError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'NotFoundError';
  }
}

class TooManyRequestsError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = 'TooManyRequestsError';
  }
}

// Create a function to handle common errors
function handleCommonErrors(error: AxiosError<any>) {
  if (error.response) {
    const { status, data } = error.response;

    switch (status) {
      case 400:
        logger.error(`Error 400: ${data?.message || 'Bad Request'}`);
        return new BadRequestError(data?.message);
      case 401:
        logger.error(`Error 401: ${data?.message || 'Unauthorized'}`);
        return new UnauthorizedError(data?.message);
      case 403:
        logger.error(`Error 403: ${data?.message || 'Forbidden'}`);
        return new ForbiddenError(data?.message);
      case 404:
        logger.error(`Error 404: ${data?.message || 'Not Found'}`);
        return new NotFoundError(data?.message);
      case 429:
        logger.error(`Error 429: ${data?.message || 'Too Many Requests'}`);
        return new TooManyRequestsError(data?.message);
      default:
        logger.error(`Error ${status}: ${data?.message || 'An error occurred'}`);
        return new Error(data?.message || 'An error occurred');
    }
  }

  logger.error(`Error: ${error.message}`);
  return error;
}

// Create a reusable Axios instance with interceptors
const axiosInstance: AxiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => {
    logger.error(`Request error: ${error.message}`);
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<any>) => handleCommonErrors(error),
);

export default axiosInstance;
