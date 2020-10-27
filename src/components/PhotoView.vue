<template>
  <div class="image_view_wrap type02">
    <div class="control_btn_wrap">
      <div class="pop_close" @click="$router.go(-1)">
        <a href="#" title="닫기"
          ><img src="@/assets/images/pop_close.png" alt="닫기"
        /></a>
      </div>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <swiper :options="swiperOption" ref="swiperRef">
          <swiper-slide
            v-for="portfolio in photoListGetter"
            :key="portfolio.id"
          >
            <img :src="portfolio.photo_expand" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="photo_bottom_box">
      <dl>
        <dt>
          <a href="#" title="링크 이동">{{ activeTitle }}</a>
        </dt>
        <dd>
          <a href="#" title="링크 이동">{{ authorInfoGetter.name }}</a>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      activeTitle: "",
      swiperOption: {
        initialSlide: 2,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          slideChangeTransitionEnd: () => {
            if (this.$refs.swiperRef.swiperInstance) {
              let activeIndex = this.$refs.swiperRef.swiperInstance.activeIndex;
              this.activeTitle = this.photoListGetter[activeIndex].title;
            }
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters(["photoListGetter", "authorInfoGetter"]),
  },
  methods: {
    setPhotoSwiper(list) {
      let idx = list.findIndex(
        (element) => element.id == this.$route.query.photo_id
      );

      if (idx > -1) {
        this.swiperOption.initialSlide = idx;
      } else {
        idx = 0;
      }

      this.activeTitle = list[idx].title;
    },
  },
  mounted() {
    this.setPhotoSwiper(this.photoListGetter);
  },
};
</script>

<style>
/* .swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
/* display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center; */
/* } */
</style>
