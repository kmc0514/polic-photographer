<template>
  <div id="wrap" class="wrap_type_tab">
    <type-bar></type-bar>
    <template v-if="this.$store.state.onSale">
      <div class="request_list">
        <!-- 결제 완료 리스트 -->
        <req-item v-for="item in paidList" :paid="true" :key="item"></req-item>
        <!-- 촬영 요청 리스트 -->
        <req-item v-for="req in reqItems" :key="req.id" :req="req"></req-item>
      </div>
    </template>
    <template v-else>
      <blank></blank>
    </template>
  </div>
</template>

<script>
import TypeBar from "@/components/TypeBar.vue";
import ReqItem from "@C/request/ReqItem.vue";
import Blank from "@/components/common/Blank.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      paidList: [],
      pendingList: [],
    };
  },
  computed: {
    ...mapGetters({
      reqItems: "reqListGetter",
    }),
  },
  components: {
    TypeBar,
    ReqItem,
    Blank,
  },
};
</script>

<style scoped></style>
