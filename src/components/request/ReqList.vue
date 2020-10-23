<template>
  <div id="wrap" class="wrap_type_tab">
    <type-bar></type-bar>
    <template v-if="this.$store.state.onSale">
      <div class="request_list">
        <!-- 결제 완료 리스트 -->
        <request-item
          v-for="item in paidList"
          :paid="true"
          :key="item"
        ></request-item>
        <!-- 촬영 요청 리스트 -->
        <request-item
          v-for="req in reqItem"
          :key="req.id"
          :req="req"
        ></request-item>
      </div>
    </template>
    <template v-else>
      <blank></blank>
    </template>
  </div>
</template>

<script>
import TypeBar from "@/components/TypeBar.vue";
import RequestItem from "@/components/RequestItem.vue";
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
      reqItem: "reqListGetter",
    }),
  },
  components: {
    TypeBar,
    RequestItem,
    Blank,
  },
  methods: {
    organizeList() {
      // ** 결제완료건 리퀘스트건 분리 **
      // const raw = this.reqItem;
      // for (let i = 0; i < raw.length; i++) {
      //   if (raw[i].state === "pending") {
      //     this.pendingList.push(raw[i]);
      //     console.log("pending");
      //   } else {
      //     this.paidList.push(raw[i]);
      //     console.log("paid");
      //   }
      // }
    },
  },
  created() {},
};
</script>

<style scoped></style>
