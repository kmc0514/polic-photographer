<template>
  <div>
    <progress-bar :curGauge="progress"></progress-bar>
    <register-slot>
      <template slot="title">촬영 요금을 설정하기</template>
      <template slot="subtitle"
        >촬영 테마별로 알맞은 요금을 책정하세요.</template
      >
      <template slot="help">
        <p>
          <a href="#" class="question_txt"
            >폴릭 요금 체계 알아보기
            <img src="@/assets/images/question_mark.png" alt="알아보기"
          /></a>
        </p>
      </template>
      <template slot="contents">
        <div class="board_box">
          <ul>
            <li
              v-for="section in priceList"
              :key="section.title"
              class="article"
            >
              <p class="q_txt">
                <a href="#a1" class="trigger">
                  <span class="title">{{ section.title }}</span>
                  <span class="review_btn"></span>
                </a>
              </p>
              <div class="a_txt">
                <set-box
                  v-for="(item, index) in section.list"
                  :key="index"
                  :numType="item.numType"
                >
                  <template slot="title"
                    ><h4>{{ item.title }}</h4></template
                  >
                  <template slot="setUnit">{{ item.setUnit }}</template>
                  <template slot="inputUnit">{{ item.inputUnit }}</template>
                </set-box>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </register-slot>
  </div>
</template>

<script>
import ProgressBar from "@C/common/ProgressBar.vue";
import RegisterSlot from "./RegisterSlot.vue";
import SetBox from "./SetBox.vue";
import { priceList } from "./registerData.js";

export default {
  data() {
    return {
      progress: "66%",
      priceList,
    };
  },
  components: {
    ProgressBar,
    RegisterSlot,
    SetBox,
  },
  created() {
    this.$emit("sentBtnData", "다음으로", "amount");
  },
};
</script>

<style></style>
