import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// [URL 축약형]
// @ : ~/src
// @C : ~/components

export const router = new VueRouter({
  mode: "history",
  routes: [
    { name: "main", path: "/", redirect: "/login" },
    {
      name: "login",
      path: "/login",
      component: () => import("@C/login/LoginPage.vue"),
    },

    // 메인 페이지
    {
      path: "/main",
      component: () => import("@/views/MainView.vue"),
      children: [
        {
          name: "request",
          path: "request",
          component: () => import("@C/request/ReqList.vue"),
        },
        {
          name: "reserve",
          path: "reserve",
          component: () => import("@C/reservation/RevList.vue"),
        },
        {
          name: "product",
          path: "product",
          component: () => import("@C/product/ProductHome.vue"),
        },
        {
          name: "portfolio",
          path: "portfolio",
          component: () => import("@C/portfolio/PortList.vue"),
        },
      ],
    },

    // 상품 미리보기 페이지
    {
      name: "preview",
      path: "/preview",
      component: () => import("@C/product/PreviewPage.vue"),
    },

    // 등록 관련 페이지 (상품, 사진, 프로필)
    {
      name: "register",
      path: "/register",
      component: () => import("@/views/RegisterView.vue"),
      children: [
        // 상품 필수 설정
        {
          name: "thema",
          path: "thema",
          component: () => import("@C/product/SetThema.vue"),
          meta: { type: "product" },
        },
        {
          name: "price",
          path: "price",
          component: () => import("@C/product/SetPrice.vue"),
          meta: { type: "product" },
        },
        {
          name: "amount",
          path: "amount",
          component: () => import("@C/product/SetAmount.vue"),
          meta: { type: "product" },
        },
        // 상품 디테일 설정
        {
          name: "introduce",
          path: "introduce",
          component: () => import("@C/product/SetIntro.vue"),
          meta: { type: "product" },
        },
        {
          name: "compare",
          path: "compare",
          component: () => import("@C/product/SetCompare.vue"),
          meta: { type: "product" },
        },
        {
          name: "guide",
          path: "guide",
          component: () => import("@C/product/SetGuide.vue"),
          meta: { type: "product" },
        },
        {
          name: "caution",
          path: "caution",
          component: () => import("@C/product/SetCaution.vue"),
          meta: { type: "product" },
        },
        // 사진 포트폴리오 등록
        {
          name: "upload",
          path: "upload",
          component: () => import("@C/portfolio/PortUpload.vue"),
          meta: { title: "포트폴리오 등록" },
        },
        {
          name: "profile",
          path: "profile",
          component: () => import("@C/admin/EditProfile.vue"),
          meta: { title: "프로필 변경" },
        },
        {
          name: "alarm",
          path: "alarm",
          component: () => import("@C/admin/AlarmList.vue"),
          meta: { title: "알람" },
        },
      ],
    },

    // 사이드메뉴 : 관리 페이지
    {
      name: "admin",
      path: "/admin",
      component: () => import("@/views/AdminView.vue"),
      children: [
        {
          name: "trade",
          path: "trade",
          component: () => import("@C/admin/trade/TradeList.vue"),
          meta: { title: "촬영 관리" },
          children: [
            {
              name: "progress",
              path: "progress",
              component: () => import("@C/reservation/RevList.vue"),
              meta: { title: "촬영 관리" },
            },
            {
              name: "finish",
              path: "finish",
              component: () => import("@C/reservation/RevList.vue"),
              meta: { title: "촬영 관리" },
            },
          ],
        },
        {
          name: "review",
          path: "review",
          component: () => import("@C/admin/ReviewList.vue"),
          meta: { title: "후기 관리" },
        },
        {
          name: "sales",
          path: "sales",
          component: () => import("@C/admin/SalesManage.vue"),
          meta: { title: "정산 관리" },
        },
        {
          name: "setting",
          path: "setting",
          component: () => import("@C/admin/SettingList.vue"),
          meta: { title: "설정" },
        },
      ],
    },
  ],
});
