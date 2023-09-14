import axios from "axios";
import qs from "qs";

// const baseURL = "http://localhost:3001";

const instance = axios.create({
  // baseURL,
  timeout: 10 * 1000, // 10 秒超时
});

// 设置请求拦截器
instance.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token") || "";
  return config;
});

// 设置响应拦截器
instance.interceptors.response.use(
  (config) => {
    return Promise.resolve(config.data);
  },
  (error) => {
    console.log(error);
  }
);

export default instance;
