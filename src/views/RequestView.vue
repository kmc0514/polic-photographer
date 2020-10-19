<template>
  <div id="wrap" class="wrap_type_tab">
    <type-bar></type-bar>
    <div class="request_list" v-show="this.$store.state.onSale">
      <!-- 결제 완료 리스트 -->
      <request-item
        :paid="true"
        v-for="item in paidList"
        :key="item"
      ></request-item>
      <!-- 촬영 요청 리스트 -->
      <request-item v-for="item in requests" :key="item"></request-item>
    </div>
  </div>
</template>

<script>
import TypeBar from "../components/TypeBar.vue";
import RequestItem from "@/components/RequestItem.vue";

export default {
  data() {
    return {
      paidList: [10, 20],
      requests: [1123, 234, 311, 43, 555],
    };
  },
  components: {
    TypeBar,
    RequestItem,
  },
};
</script>

<style scoped></style>
