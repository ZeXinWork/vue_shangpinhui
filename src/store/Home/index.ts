/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { category, getBaner, getFloor, getProduct } from "@/api";
import { requestType } from "@/api/request";
import { ActionContext } from "vuex";

export type floorList = {
  bigImg: string;
  carouselList: { id: string; imgUrl: string }[];
  id: string;
  imgUrl: string;
  keywords: string[];
  name: string;
  navList: {
    text: string;
    url: string;
  }[];
  recommendList: string[];
};

type stateProps = {
  categoryList: category[];
  banner: string[];
  floor: floorList[];
};
const state: stateProps = {
  categoryList: [],
  banner: [],
  floor: [],
};
export default {
  state,
  mutations: {
    updateCategoryList(state: stateProps, list: category[]): void {
      state.categoryList = list;
    },
    UPDATEBANER(state: stateProps, data: stateProps["banner"]) {
      state.banner = data;
    },
    GETFLOOR(state: stateProps, data: stateProps["floor"]) {
      state.floor = data;
    },
  },
  actions: {
    async categoryList({ commit }: ActionContext<any, any>) {
      const data = (await getProduct()) as unknown as requestType<category[]>;
      if (data.code === 200) {
        commit("updateCategoryList", data.data);
      }
    },
    async getBanner({ commit }: ActionContext<any, any>) {
      const result = await getBaner();
      commit("UPDATEBANER", result.data);
    },
    async getFloorList({ commit }: ActionContext<any, any>) {
      const result = await getFloor();
      commit("GETFLOOR", result.data);
    },
  },
};
