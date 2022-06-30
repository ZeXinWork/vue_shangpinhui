/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { reqGetSearchInfo } from "@/api";
import { ActionContext } from "vuex";

const state = {
  searchInfo: [],
};
const mutations = {
  SEARCHINFO(state: any, data: any) {
    state.searchInfo = data;
  },
};
const actions = {
  async getSearchInfo({ commit }: ActionContext<any, any>, params: any) {
    console.log(params, "params");
    const result = await reqGetSearchInfo(params);
    commit("SEARCHINFO", result.data || []);
  },
};
const getters = {
  searchInfo(state: any) {
    return state.searchInfo;
  },
  trademarkList(state: any) {
    return state.searchInfo.trademarkList || [];
  },
  attrsList(state: any) {
    return state.searchInfo.attrsList || [];
  },
};
export default { state, mutations, actions, getters };
