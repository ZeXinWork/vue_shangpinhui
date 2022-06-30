/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import request from "./request";
import mockRequest from "./mockApi";
export type category = {
  categoryId: number;
  categoryName: string;
  categoryChild?: { categoryId: number; categoryName: string }[];
};

export const getProduct = () =>
  request({ url: "/product/getBaseCategoryList", method: "GET" });

export const getBaner = () => mockRequest.get("/banner");

export const getFloor = () => mockRequest.get("/floor");

export const reqGetSearchInfo = (params: any) =>
  request({ url: "/list", method: "post", data: params });
