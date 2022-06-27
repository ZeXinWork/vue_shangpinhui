import { category, getProduct } from '@/api'
import { requestType } from '@/api/request'
import { ActionContext } from 'vuex'

type stateProps = {
  categoryList: category[]
}
const state: stateProps = {
  categoryList: [],
}
export default {
  state,
  mutations: {
    updateCategoryList(state: { categoryList: category }, list: category) {
      state.categoryList = list
    },
  },
  actions: {
    async categoryList({ commit }: ActionContext<any, any>) {
      const data = (await getProduct()) as unknown as requestType<category>
      if (data.code === 200) {
        commit('updateCategoryList', data.data)
      }
    },
  },
}
