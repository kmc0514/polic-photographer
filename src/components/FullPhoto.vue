<template>
  <div class="image_view_wrap type02">
    <div class="control_btn_wrap">
      <div class="pop_close">
        <a href="#" title="닫기" @click="offFull"
          ><img src="@/images/pop_close.png" alt="닫기"
        /></a>
      </div>
    </div>
    <!-- <div class="swiper-container">
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
      <div class="swiper-pagination"></div>
    </div> -->
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper>
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
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

SwiperCore.use([Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
    offFull() {
      this.$emit("off");
    },
  },
};
</script>

<style></style>
