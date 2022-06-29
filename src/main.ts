import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TypeNav from "@/components/TypeNav/TypeNav.vue";
import { getProduct } from "./api";
import "@/mock/mockServe";
import "swiper/css/swiper.css";
Vue.component("TypeNav", TypeNav);
Vue.config.productionTip = false;
getProduct();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
