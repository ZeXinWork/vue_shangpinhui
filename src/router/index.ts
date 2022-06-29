import Vue from "vue";
import VueRouter, { RawLocation, Route, RouteConfig } from "vue-router";
import Home from "@/views/Home/Home.vue";
import Search from "@/views/Search/Search.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";

const originalPush = VueRouter.prototype.push as unknown as Promise<Route>;
const originalReplace = VueRouter.prototype.push as unknown as Promise<Route>;

VueRouter.prototype.push = function push(location: RawLocation) {
  return (originalPush as any).call(this, location).catch((err: Error) => err);
};

VueRouter.prototype.replace = function push(location: RawLocation) {
  return (originalReplace as any)
    .call(this, location)
    .catch((err: Error) => err);
};
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/search/:keyword?",
    name: "Search",
    component: Search,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  routes,
});

export default router;
