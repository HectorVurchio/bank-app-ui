import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactView.vue"),
  },
  {
    path: "/notices",
    name: "notices",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NoticesView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
  },
  {
    path: "/logout",
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogoutView.vue"),
  },
  {
    path: "/myAccount",
    name: "myAccount",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AccountView.vue"),
  },
  {
    path: "/myBalance",
    name: "myBalance",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BalanceView.vue"),
  },
  {
    path: "/myLoans",
    name: "myLoans",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoansView.vue"),
  },
  {
    path: "/myCards",
    name: "myCards",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CardsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
