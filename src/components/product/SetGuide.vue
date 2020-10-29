<template>
  <register-slot>
    <template slot="title">촬영은 어떻게 진행되나요?</template>
    <template slot="subtitle">촬영 진행방식에 대해서 전달해주세요.</template>
    <div slot="contents" class="box">
      <auto-textarea
        :placeholder="`상담부터 촬영까지의 모든 과정을 안내하세요.`"
        :maxLength="`800`"
      ></auto-textarea>
    </div>
  </register-slot>
</template>

<script>
import RegisterSlot from "./RegisterSlot.vue";
import AutoTextarea from "@C/common/AutoTextarea";

export default {
  components: {
    RegisterSlot,
    AutoTextarea,
  },
  created() {
    this.$emit("sentBtnData", "계속하기", "caution");
  },
};
</script>

<style></style>
