import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundView,
  },
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
    meta: { requiresAuth: true },
  },
  {
    path: "/logout",
    name: "logout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogoutView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/myAccount?id=:id",
    name: "myAccount",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AccountView.vue"),
    props: (route) => ({ id: parseInt(route.params.id) }),
    meta: { requiresAuth: true },
  },
  {
    path: "/myBalance",
    name: "myBalance",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BalanceView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/myLoans",
    name: "myLoans",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoansView.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/myCards",
    name: "myCards",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CardsView.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("user");

  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    next("/login");
  }
  next();
});

export default router;
