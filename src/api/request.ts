import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
const request = axios.create({
  baseURL: "/api",
  timeout: 3000,
});

export type requestType<T> = {
  code: number;
  data: T;
};

request.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});

request.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (err) => {
    nprogress.done();
    console.log(err);
  }
);

export default request;
