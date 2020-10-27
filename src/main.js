import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index.js";
import { store } from "@/store/index.js";
import VueProgressiveImage from "vue-progressive-image";
import VueMasonryCss from "vue-masonry-css";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/swiper-bundle.css";

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);
Vue.use(VueMasonryCss);
Vue.use(VueProgressiveImage);

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
