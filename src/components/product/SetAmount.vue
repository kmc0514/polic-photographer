<template>
  <div>
    <progress-bar :curGauge="progress"></progress-bar>
    <register-slot>
      <template slot="title">촬영 요금을 설정하기</template>
      <template slot="subtitle"
        >촬영 테마별로 알맞은 요금을 책정하세요.</template
      >
      <template slot="help"
        ><p>
          <a href="#" class="question_txt"
            >폴릭 요금 체계 알아보기
            <img src="@/assets/images/question_mark.png" alt="알아보기"
          /></a></p
      ></template>
      <template slot="contents">
        <div class="select_list02 type02">
          <h3 class="left_title">제공 형식</h3>
          <div class="right_box">
            <div class="round_check text05">
              <input
                type="radio"
                id="check01"
                name="round_check"
                value="raw"
                v-model="type"
              />
              <label for="check01">원본제공형</label>
            </div>
            <div class="round_check text05">
              <input
                type="radio"
                id="check02"
                name="round_check"
                value="retouch"
                v-model="type"
              />
              <label for="check02">색감보정형</label>
            </div>
          </div>
        </div>
        <template v-if="type !== 'none'">
          <div class="select_list02">
            <h3 class="left_title">단위 시간</h3>
            <div class="right_box">
              <p class="right_text">30분</p>
            </div>
          </div>
          <div
            class="select_list02 type02"
            v-for="item in amountList"
            :key="item.title"
          >
            <set-box>
              <template slot="title">
                <h3 class="left_title">{{ item.title }}</h3>
              </template>
              <template slot="setUnit">{{ item.setUnit }}</template>
              <template slot="inputUnit">{{ item.inputUnit }}</template>
            </set-box>
          </div>
        </template>
        <p class="small_txt02">
          기본 설정을 완료하면
          <a href="#" class="under_line">폴릭 예약 취소 및 환불 규정</a>에
          동의하는 것으로 간주합니다.
        </p>
      </template>
    </register-slot>
  </div>
</template>

<script>
import ProgressBar from "@C/common/ProgressBar.vue";
import RegisterSlot from "./RegisterSlot.vue";
import SetBox from "./SetBox.vue";
import { amountList } from "./registerData.js";

export default {
  data() {
    return {
      progress: "100%",
      type: "none",
      amountList,
    };
  },
  watch: {
    type() {
      this.getAmountList();
    },
  },
  components: {
    ProgressBar,
    RegisterSlot,
    SetBox,
  },
  methods: {
    getAmountList() {
      let arr = amountList;
      arr.map((item) => {
        if (item.type === this.type) {
          return (arr = item.list);
        }
      });
      this.amountList = arr;
    },
  },
  created() {
    this.$emit("sentBtnData", "기본 설정 완료하기", "introduce");
  },
};
</script>

<style></style>
