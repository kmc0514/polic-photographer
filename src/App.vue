<template>
  <body id="app">
    <modal></modal>
    <router-view></router-view>
  </body>
</template>

<script>
import Modal from "@C/common/Modal.vue";

export default {
  components: {
    Modal,
  },
};
</script>

<style>
@import "./assets/css/style.css";
</style>
