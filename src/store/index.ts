import Vue from "vue";
import Vuex from "vuex";
import home from "./Home/index";
import Search from "./Search/index";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    Search,
  },
});
