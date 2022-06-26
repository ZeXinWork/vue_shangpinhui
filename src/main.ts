import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TypeNav from "@/components/TypeNav/TypeNav.vue";
import { getProduct } from "./api";
Vue.component(TypeNav.name, TypeNav);
Vue.config.productionTip = false;
getProduct();
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
