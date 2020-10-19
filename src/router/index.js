import Vue from "vue";
import VueRouter from "vue-router";
// 메인
import RequestView from "../views/RequestView.vue";
import ProductView from "../views/ProductView.vue";
import PortfolioView from "../views/PortfolioView.vue";
// 셋팅
import SettingView from "../views/SettingView.vue";
import ThemaView from "../views/ThemaView.vue";
import PriceView from "../views/PriceView.vue";
import AmountView from "../views/AmountView.vue";
import IntroduceView from "../views/IntroduceView.vue";
import CompareView from "../views/CompareView.vue";
import GuideView from "../views/GuideView.vue";
import CautionView from "../views/CautionView.vue";
import Preview from "../views/Preview.vue";
import WriteView from "../views/WriteView.vue";
import AlarmView from "@/views/sidemenu/AlarmView.vue";
import ProfileView from "@/views/ProfileView.vue";
// 사이드
import TradeView from "@/views/sidemenu/TradeView.vue";
import Review from "@/views/sidemenu/Review.vue";
import IncomeView from "@/views/sidemenu/IncomeView.vue";
import ConfigView from "@/views/sidemenu/ConfigView.vue";

import ListView from "@/views/ListView.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    // 메인 라우터
    { name: "main", path: "/", redirect: "/request" },
    {
      name: "request",
      path: "/request",
      component: RequestView,
      meta: { type: "main" },
    },
    {
      name: "reserve",
      path: "/reserve",
      component: ListView,
      meta: { type: "main" },
    },
    {
      name: "product",
      path: "/product",
      component: ProductView,
      meta: { type: "main" },
    },
    {
      name: "preview",
      path: "/preview",
      component: Preview,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: PortfolioView,
      meta: { type: "main" },
    },
    {
      name: "setting",
      path: "/setting",
      component: SettingView,
      children: [
        // 상품 필수 설정
        {
          name: "thema",
          path: "thema",
          component: ThemaView,
          meta: { type: "product" },
        },
        {
          name: "price",
          path: "price",
          component: PriceView,
          meta: { type: "product" },
        },
        {
          name: "amount",
          path: "amount",
          component: AmountView,
          meta: { type: "product" },
        },
        // 상품 디테일 설정
        {
          name: "introduce",
          path: "introduce",
          component: IntroduceView,
          meta: { type: "product" },
        },
        {
          name: "compare",
          path: "compare",
          component: CompareView,
          meta: { type: "product" },
        },
        {
          name: "guide",
          path: "guide",
          component: GuideView,
          meta: { type: "product" },
        },
        {
          name: "caution",
          path: "caution",
          component: CautionView,
          meta: { type: "product" },
        },
        // 사진 포트폴리오 등록
        {
          name: "write",
          path: "write",
          component: WriteView,
          meta: { title: "포트폴리오 등록" },
        },
        {
          name: "profile",
          path: "profile",
          component: ProfileView,
          meta: { title: "프로필 변경" },
        },
        {
          name: "alarm",
          path: "alarm",
          component: AlarmView,
          meta: { title: "알람" },
        },
      ],
    },

    // 사이드 라우터
    {
      name: "trade",
      path: "/trade",
      component: TradeView,
      meta: { title: "촬영 관리" },
      children: [
        {
          name: "progress",
          path: "progress",
          component: ListView,
          meta: { title: "촬영 관리" },
        },
        {
          name: "finish",
          path: "finish",
          component: ListView,
          meta: { title: "촬영 관리" },
        },
      ],
    },
    {
      name: "review",
      path: "/review",
      component: Review,
      meta: { title: "후기 관리" },
    },
    {
      name: "income",
      path: "/income",
      component: IncomeView,
      meta: { title: "정산 관리" },
    },
    {
      name: "config",
      path: "/config",
      component: ConfigView,
      meta: { title: "설정" },
    },
  ],
});
