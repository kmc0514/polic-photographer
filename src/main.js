import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index.js";
import { store } from "@/store/index.js";
import { VueMasonryPlugin } from "vue-masonry";
import VueProgressiveImage from "vue-progressive-image";

Vue.use(VueProgressiveImage);

Vue.use(VueMasonryPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
