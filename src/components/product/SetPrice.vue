<template>
  <div>
    <progress-bar :curGauge="progress"></progress-bar>
    <register-slot>
      <template slot="title">촬영 요금을 설정하기</template>
      <template slot="subtitle"
        >촬영 테마별로 알맞은 요금을 책정하세요.</template
      >
      <template slot="help">
        <p @click="showHelp">
          <a href="#" class="question_txt"
            >폴릭 요금 체계 알아보기
            <img src="@/assets/images/question_mark.png" alt="알아보기"
          /></a>
        </p>
      </template>
      <div slot="contents">
        <div class="board_box">
          <ul>
            <li
              v-for="section in priceList"
              :key="section.type"
              class="article hide_none"
              ref="item"
              @click="onOffSetBox(section.type)"
            >
              <p class="q_txt">
                <a href="#a1" class="trigger">
                  <span class="title">{{ section.type }}</span>
                  <span class="review_btn"></span>
                </a>
              </p>
              <div class="a_txt" style="display: none">
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
      </div>
    </register-slot>
  </div>
</template>

<script>
import ProgressBar from "@C/common/ProgressBar.vue";
import RegisterSlot from "./RegisterSlot.vue";
import SetBox from "./SetBox.vue";
import { priceList } from "./registerData.js";
import { bus } from "@/utils/bus";

export default {
  data() {
    return {
      progress: "66%",
      priceList,
      type: "",
    };
  },
  components: {
    ProgressBar,
    RegisterSlot,
    SetBox,
  },
  methods: {
    onOffSetBox(key) {
      const items = this.$refs.item;
      const reset = () => {
        items.map((e) => {
          e.classList.remove("show");
          e.classList.add("hide_none");
          e.childNodes[1].style.display = "none";
        });
      };

      const show = (curItem) => {
        items[curItem].classList.remove("hide_none");
        items[curItem].classList.add("show");
        items[curItem].childNodes[1].style.display = "";
      };

      if (key === "일반") {
        reset();
        show(0);
      } else if (key === "베이비/주니어") {
        reset();
        show(1);
      } else {
        reset();
        show(2);
      }
    },
    showHelp() {
      bus.$emit("showModal", "price");
    },
  },
  created() {
    this.$emit("sentBtnData", "다음으로", "amount");
  },
};
</script>

<style scoped></style>
