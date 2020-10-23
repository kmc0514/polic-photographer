<template>
  <div>
    <side-tab>
      <li><router-link to="progress">촬영 종료</router-link></li>
      <li><router-link to="finish">거래 완료</router-link></li>
    </side-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import SideTab from "@C/SideTab.vue";

export default {
  components: {
    SideTab,
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: #ff635f;
  font-weight: 600;
}

.router-link-exact-active::after {
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  text-align: center;
  margin: -2px auto 0;
  background: #ff635f;
}
</style>
