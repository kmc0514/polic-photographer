<template>
  <div>
    <menu-header :isMain="false">{{ $route.meta.title }}</menu-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuHeader from "@C/common/MenuHeader.vue";

export default {
  components: {
    MenuHeader,
  },
};
</script>

<style></style>
