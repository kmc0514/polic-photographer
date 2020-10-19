<template>
  <div class="image_view_wrap type02">
    <div class="control_btn_wrap">
      <div class="pop_close" @click="fullOff">
        <a href="#" title="닫기"
          ><img src="@/images/pop_close.png" alt="닫기"
        /></a>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/images/sample_img01.png" alt="후기 사진" />
        </div>
        <div class="swiper-slide">
          <img src="@/images/sample_img02.png" alt="후기 사진" />
        </div>
        <div class="swiper-slide">
          <img src="@/images/sample_img03.png" alt="후기 사진" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="photo_bottom_box">
      <dl>
        <dt>
          <a href="#" title="링크 이동"
            >억새축제 우정스냅, 하늘공원 억새축제 우정스냅, 하늘공원 억새축제
            우정스냅, 하늘공원</a
          >
        </dt>
        <dd>
          <a href="#" title="링크 이동"
            >라네스냅 라네스냅 라네스냅 라네스냅 라네스냅 라네스냅 라네스냅</a
          >
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fullOff() {
      this.$emit("off");
    },
  },
};
</script>

<style scoped>
.image_view_wrap {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
}
</style>
