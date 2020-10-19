<template>
  <div>
    <tab-slot>
      <li><router-link to="/trade/progress">촬영 종료</router-link></li>
      <li>
        <router-link to="/trade/finish">거래 완료</router-link>
      </li>
    </tab-slot>
    <router-view></router-view>
  </div>
</template>

<script>
import TabSlot from "@/components/TabSlot.vue";

export default {
  components: {
    TabSlot,
  },
  mounted() {},
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
