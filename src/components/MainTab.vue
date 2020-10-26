<template>
  <div>
    <div class="tab tab_type04" id="myHeader" ref="myHeader">
      <ul>
        <li><router-link to="/main/request">촬영요청</router-link></li>
        <li><router-link to="/main/reserve">예약목록</router-link></li>
        <li><router-link to="/main/product">촬영상품</router-link></li>
        <li><router-link to="/main/portfolio">포트폴리오</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fixTab } from "@/mixins/fixTab.js";

export default {
  mixins: [fixTab],
};
</script>

<style scoped>
.router-link-exact-active {
  color: #3b3b3b;
  font-weight: 600;
}

.router-link-exact-active::after {
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  text-align: center;
  margin: -2px auto 0;
  background: #3b3b3b;
}
</style>
