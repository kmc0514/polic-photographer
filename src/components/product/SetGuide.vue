<template>
  <register-slot>
    <template slot="title">촬영은 어떻게 진행되나요?</template>
    <template slot="subtitle">촬영 진행방식에 대해서 전달해주세요.</template>
    <div slot="contents" class="box">
      <textarea
        class="bottom_line"
        placeholder="상담부터 촬영까지에 이르는 과정을 공유하세요."
        onkeydown="resize(this)"
        onkeyup="resize(this)"
      ></textarea>
      <p class="text_num">0&#47;800</p>
    </div>
  </register-slot>
</template>

<script>
import RegisterSlot from "./RegisterSlot.vue";

export default {
  components: {
    RegisterSlot,
  },
  created() {
    this.$emit("sentBtnData", "계속하기", "caution");
  },
};
</script>

<style></style>
