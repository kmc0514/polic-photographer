<template>
  <div>
    <router-view @sentBtnData="getBtnData"></router-view>
    <complete-btn :nextUrl="nextUrl">
      {{ btnName }}
    </complete-btn>
  </div>
</template>

<script>
import CompleteBtn from "@/components/completeBtn.vue";
import { whiteBg } from "@/mixins/whiteBg.js";

export default {
  data() {
    return {
      btnName: String,
      nextUrl: String,
    };
  },
  methods: {
    getBtnData(name, url) {
      this.btnName = name;
      this.nextUrl = url;
    },
  },
  components: {
    CompleteBtn,
  },
  mixins: [whiteBg],
};
</script>

<style></style>
