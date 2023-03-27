/* eslint-disable */
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const setUpInterceptor = () => {
  const handleError = async (error: AxiosError) => {
    return Promise.reject(error);
  };
  axios.interceptors.request.use(async (config: any | AxiosRequestConfig) => {
    // config.baseURL = process.env.REACT_APP_API_URL;
    let token = localStorage.getItem("ACCESS_TOKEN");
    token ? (config.headers.ACCESS_TOKEN = `Bearer ${token}`) : null,
      (config.headers.ACCESS_CONTROL_ALLOW_ORIGIN = "*");
    return config;
  });

  axios.interceptors.response.use((response) => response, handleError);
};

export default setUpInterceptor;
