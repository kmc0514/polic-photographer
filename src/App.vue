<template>
  <body id="app">
    <global-modal></global-modal>
    <router-view></router-view>
  </body>
</template>

<script>
import GlobalModal from "@C/common/GlobalModal.vue";

export default {
  components: {
    GlobalModal,
  },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
