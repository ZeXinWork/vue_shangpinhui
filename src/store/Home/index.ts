import { category, getBaner, getProduct } from '@/api'
import { requestType } from '@/api/request'
import { ActionContext } from 'vuex'

type stateProps = {
  categoryList: category[]
  banner: string[]
}
const state: stateProps = {
  categoryList: [],
  banner: [],
}
export default {
  state,
  mutations: {
    updateCategoryList(state: stateProps, list: category[]): void {
      state.categoryList = list
    },
    UPDATEBANER(state: stateProps, data: stateProps['banner']) {
      state.banner = data
    },
  },
  actions: {
    async categoryList({ commit }: ActionContext<any, any>) {
      const data = (await getProduct()) as unknown as requestType<category[]>
      if (data.code === 200) {
        commit('updateCategoryList', data.data)
      }
    },
    async getBanner({ commit }: ActionContext<any, any>) {
      const result = await getBaner()
      commit('UPDATEBANER', result.data)
    },
  },
}
