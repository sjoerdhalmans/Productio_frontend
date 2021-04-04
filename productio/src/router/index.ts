import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";
import Requisitions from "../views/Requisitions.vue";
import Logistics from "../views/Logistics.vue";
import HumanResources from "../views/HumanResources.vue";
import Sales from "../views/Sales.vue";
import Production from "../views/Production.vue";
import DepartmentOverview from "../views/DepartmentOverview.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/DepartmentOverview",
    name: "departmentoverview",
    component: DepartmentOverview
  },
  {
    path: "/main",
    name: "Main",
    component: Main
  },
  {
    path: "/requisitions",
    name: "requisitions",
    component: Requisitions
  },
  {
    path: "/logistics",
    name: "logistics",
    component: Logistics
  },
  {
    path: "/hr",
    name: "hr",
    component: HumanResources
  },
  {
    path: "/sales",
    name: "sales",
    component: Sales
  },
  {
    path: "/production",
    name: "production",
    component: Production
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
