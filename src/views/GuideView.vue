<template>
  <div>
    <div id="wrap" class="wrap_type_normal footer_btn_ver">
      <!-- 하단 버튼 추가시 footer_btn_ver 추가 -->
      <div class="box">
        <div class="info_box">
          <h2>촬영은 어떻게 진행되나요?</h2>
          <p>촬영 진행방식에 대해서 전달해주세요.</p>
        </div>
        <textarea
          class="bottom_line"
          placeholder="상담부터 촬영까지에 이르는 과정을 공유하세요."
          onkeydown="resize(this)"
          onkeyup="resize(this)"
        ></textarea>
        <p class="text_num">0&#47;800</p>
      </div>
    </div>

    <div class="bottom_btn_wrap mb20">
      <button type="button" class="bottom_btn_gray">계속하기</button
      ><!-- 활성화시 bottom_btn_pink으로 변경 -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
