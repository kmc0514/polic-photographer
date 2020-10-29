<template>
  <div>
    <progress-bar :curGauge="progress"></progress-bar>
    <register-slot>
      <template slot="title">어떤 촬영을 할 수 있나요?</template>
      <template slot="subtitle">판매가능한 촬영종류를 모두 고르세요.</template>
      <div slot="contents" class="box">
        <div class="select_list" v-for="item in thema" :key="item.type">
          <h3>{{ item.type }}</h3>
          <div class="select_item">
            <text-checkbox
              v-for="label in item.label"
              :key="label"
              :id="label"
              :text="label"
            ></text-checkbox>
          </div>
        </div>
      </div>
    </register-slot>
  </div>
</template>

<script>
import ProgressBar from "@C/common/ProgressBar.vue";
import RegisterSlot from "./RegisterSlot";
import TextCheckbox from "@C/common/TextCheckbox";

export default {
  data() {
    return {
      progress: "33%",
      thema: [
        {
          type: "일반",
          label: ["개인/프로필", "가족사진", "커플사진", "우정사진"],
        },
        {
          type: "베이비/주니어",
          label: ["아기/돌", "주니어"],
        },
        {
          type: "행사",
          label: ["돌잔치", "가족행사", "무대/콘서트", "기업행사"],
        },
      ],
    };
  },
  components: {
    ProgressBar,
    RegisterSlot,
    TextCheckbox,
  },
  created() {
    this.$emit("sentBtnData", "다음으로", "price");
  },
};
</script>

<style scoped>
.select_item {
  display: inline-block;
  margin-top: 12px;
}
</style>
