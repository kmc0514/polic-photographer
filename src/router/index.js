import Vue from "vue";
import VueRouter from "vue-router";

// 뷰
import RequestView from "../views/RequestView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    // 깃허브 페이지
    { path: "/polic-photographer", redirect: "/request" },
    { path: "/", redirect: "/request" },
    //   메인
    {
      name: "request",
      path: "/request",
      component: RequestView,
    },
  ],
});
