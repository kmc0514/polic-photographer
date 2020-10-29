<template>
  <register-slot>
    <template slot="title">작가님은 누구인가요?</template>
    <template slot="subtitle">자유롭게 작가님에 대해서 소개해주세요.</template>
    <div slot="contents" class="box">
      <auto-textarea
        :placeholder="placeholder"
        :maxLength="`400`"
      ></auto-textarea>
    </div>
  </register-slot>
</template>

<script>
import RegisterSlot from "./RegisterSlot.vue";
import AutoTextarea from "@C/common/AutoTextarea.vue";

export default {
  data() {
    return {
      placeholder: "촬영 경력, 경험, 가치관 등을 공유해보세요.",
    };
  },
  components: {
    RegisterSlot,
    AutoTextarea,
  },
  created() {
    this.$emit("sentBtnData", "계속하기", "compare");
  },
};
</script>

<style></style>
