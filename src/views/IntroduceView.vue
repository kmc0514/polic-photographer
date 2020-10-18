<template>
  <div>
    <div id="wrap" class="wrap_type_normal footer_btn_ver">
      <!-- 하단 버튼 추가시 footer_btn_ver 추가 -->
      <div class="box">
        <div class="info_box">
          <h2>작가님은 누구인가요?</h2>
          <p>자유롭게 작가님에 대해서 소개해주세요.</p>
        </div>
        <textarea
          class="bottom_line"
          placeholder="촬영 경력, 경험, 가치관 등을 공유해보세요."
          onkeydown="resize(this)"
          onkeyup="resize(this)"
        ></textarea>
        <p class="text_num">0&#47;400</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("sentBtnData", "계속하기", "compare");
  },
};
</script>

<style></style>
