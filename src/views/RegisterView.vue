<template>
  <div>
    <back-header>{{ $route.meta.title }}</back-header>
    <router-view @sentBtnData="getBtnData"></router-view>
    <template v-if="showBtn">
      <complete-btn :nextUrl="nextUrl">
        {{ btnName }}
      </complete-btn>
    </template>
  </div>
</template>

<script>
import BackHeader from "@C/common/BackHeader.vue";
import CompleteBtn from "@/components/completeBtn.vue";
import { whiteBg } from "@/mixins/whiteBg.js";

export default {
  data() {
    return {
      btnName: String,
      nextUrl: String,
      showBtn: Boolean,
    };
  },
  methods: {
    getBtnData(name, url) {
      this.btnName = name;
      this.nextUrl = url;
    },
    showButton() {
      if (this.$route.name === "alarm") {
        this.showBtn = false;
      } else {
        this.showBtn = true;
      }
      console.log("ok");
    },
  },
  components: {
    BackHeader,
    CompleteBtn,
  },
  mixins: [whiteBg],
  created() {
    this.showButton();
  },
};
</script>

<style></style>
