import { AxiosPromise } from "axios";
import request from "./request";

export const getProduct = (): AxiosPromise<any> =>
  request({ url: "/product/getBaseCategoryList" });
