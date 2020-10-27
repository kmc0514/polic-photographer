<template>
  <body id="app">
    <global-modal></global-modal>
    <router-view></router-view>
    <load-spinner :loading="loadingStatus"></load-spinner>
  </body>
</template>

<script>
import GlobalModal from "@C/common/GlobalModal.vue";
import LoadSpinner from "@C/common/LoadSpinner.vue";
import { bus } from "./utils/bus.js";

export default {
  data() {
    return {
      loadingStatus: false,
    };
  },
  components: {
    GlobalModal,
    LoadSpinner,
  },
  methods: {
    onSpinner() {
      this.loadingStatus = true;
    },
    offSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on("spinner-on", this.onSpinner);
    bus.$on("spinner-off", this.offSpinner);
  },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
