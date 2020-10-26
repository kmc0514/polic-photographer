<template>
  <div>
    <progress-bar :curGauge="progress"></progress-bar>
    <register-slot>
      <template slot="title">어떤 촬영을 할 수 있나요?</template>
      <template slot="subtitle">판매가능한 촬영종류를 모두 고르세요.</template>
      <div slot="contents" class="box">
        <div class="select_list">
          <h3>일반</h3>
          <div class="select_item">
            <div class="round_check text05">
              <input type="checkbox" id="check01" name="round_check" />
              <label for="check01">개인&#47;프로필</label>
            </div>
            <div class="round_check">
              <input type="checkbox" id="check02" name="round_check" />
              <label for="check02">가족사진</label>
            </div>
            <div class="round_check">
              <input type="checkbox" id="check03" name="round_check" />
              <label for="check03">커플사진</label>
            </div>
            <div class="round_check">
              <input type="checkbox" id="check04" name="round_check" />
              <label for="check04">우정사진</label>
            </div>
          </div>
        </div>
        <div class="select_list">
          <h3>베이비/주니어</h3>
          <div class="select_item">
            <div class="round_check">
              <input type="checkbox" id="check05" name="round_check02" />
              <label for="check05">아기&#47;돌</label>
            </div>
            <div class="round_check">
              <input type="checkbox" id="check06" name="round_check02" />
              <label for="check06">주니어</label>
            </div>
          </div>
        </div>
        <div class="select_list">
          <h3>행사</h3>
          <div class="select_item">
            <div class="round_check">
              <input type="checkbox" id="check07" name="round_check03" />
              <label for="check07">돌잔치</label>
            </div>
            <div class="round_check">
              <input type="checkbox" id="check08" name="round_check03" />
              <label for="check08">가족행사</label>
            </div>
            <div class="round_check text05">
              <input type="checkbox" id="check09" name="round_check03" />
              <label for="check09">무대&#47;콘서트</label>
            </div>
            <div class="round_check">
              <input type="radio" id="check10" name="round_check03" />
              <label for="check10">기업행사</label>
            </div>
          </div>
        </div>
      </div>
    </register-slot>
  </div>
</template>

<script>
import ProgressBar from "@C/common/ProgressBar.vue";
import RegisterSlot from "./RegisterSlot";

export default {
  data() {
    return {
      progress: "33%",
    };
  },
  components: {
    ProgressBar,
    RegisterSlot,
  },
  created() {
    this.$emit("sentBtnData", "다음으로", "price");
  },
};
</script>

<style></style>
