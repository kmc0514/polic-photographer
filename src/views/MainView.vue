<template>
  <div>
    <menu-header :isMain="true"></menu-header>
    <main-tab></main-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuHeader from "@C/common/MenuHeader.vue";
import MainTab from "@C/MainTab.vue";

export default {
  methods: {},
  components: {
    MenuHeader,
    MainTab,
  },
};
</script>

<style></style>
