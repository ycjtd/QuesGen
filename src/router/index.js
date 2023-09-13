import { createRouter, createWebHistory } from "vue-router";
const Login = () => import("../pages/Login.vue");
const Home = () => import("../pages/Home.vue");
const Register = () => import("../pages/Register.vue");
const NotFount = () => import("../pages/NotFount.vue");
const List = () => import("../pages/manages/List.vue");
const Star = () => import("../pages/manages/Star.vue");
const Trash = () => import("../pages/manages/Trash.vue");
const Edit = () => import("../pages/questions/Edit/index.vue");
const Stat = () => import("../pages/questions/Stat/index.vue");
const MainLayout = () => import("../layouts/MainLayout.vue");
const ManageLayout = () => import("../layouts/ManageLayout.vue");
const QuestionLayout = () => import("../layouts/QuestionLayout.vue");

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        component: Home,
      },
      {
        path: "login",
        name: "login",
        component: Login,
      },
      {
        path: "register",
        name: "register",
        component: Register,
      },
      {
        path: "manage",
        component: ManageLayout,
        children: [
          {
            path: "list",
            component: List,
          },
          {
            path: "star",
            component: Star,
          },
          {
            path: "trash",
            component: Trash,
          },
        ],
      },
      {
        name: "404",
        path: "/404",
        component: NotFount,
      },
      {
        path: "*", // 此处需特别注意至于最底部
        redirect: "/404",
      },
    ],
  },
  {
    path: "/question",
    component: QuestionLayout,
    children: [
      {
        path: "edit/:id",
        component: Edit,
      },
      {
        path: "stat/:id",
        component: Stat,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
