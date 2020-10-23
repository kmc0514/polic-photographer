<template>
  <div id="wrap" class="wrap_type_normal">
    <div class="request_list">
      <div class="request_box">
        <div class="left_ico">
          <img src="@/assets/images/bell_white.png" class="bell_ico" />
        </div>
        <div class="view_content">
          <div class="title">
            <h3>촬영을 준비하세요.</h3>
            <p>오늘 오후 1:13</p>
          </div>
          <p>예약 목록에서 촬영스케쥴을 확인하고 내일 촬영을 준비하세요.</p>
          <!-- a태그 삽입 필요시, p 태그 안에 삽입하면 됩니다. -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("sentBtnData", "사진 업로드", "/portfolio");
  },
};
</script>

<style></style>
