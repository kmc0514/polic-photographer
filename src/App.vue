<template>
  <div>
    <header-bar></header-bar>
    <header-tab></header-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import HeaderTab from "./components/HeaderTab.vue";

export default {
  components: {
    HeaderBar,
    HeaderTab,
  },
};
</script>

<style></style>
