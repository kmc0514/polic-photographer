<template>
  <div>
    <div id="wrap" class="wrap_type_tab">
      <div class="fixed_btn">
        <router-link to="/setting/write"
          ><img src="@/images/request_ico.png" alt="요청서"
        /></router-link>
      </div>
      <div
        v-masonry
        transition-duration="0.3s"
        item-selector=".grid-item"
        gutter="8"
        class="grid"
      >
        <div
          v-masonry-tile
          class="grid-item"
          v-for="(item, index) in imgArr"
          :key="index"
        >
          <div class="grid_check_wrap">
            <button type="button"><img src="@/images/photo_del.png" /></button>
            <a class="" href="#" @click="lookFull">
              <progressive-img
                :src="require(`../images/sample_${item}.png`)"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
    <full-photo v-show="fullSize" @off="lookReqular"></full-photo>
  </div>
</template>

<script>
import FullPhoto from "@/components/FullPhoto.vue";
import { whiteBg } from "@/mixins/whiteBg.js";

export default {
  data() {
    return {
      imgArr: [
        "img01",
        "img02",
        "img03",
        "img04",
        "img05",
        "img06",
        "img07",
        "img01",
        "img02",
        "img03",
        "img04",
        "img05",
        "img06",
        "img07",
      ],
      fullSize: false,
      curScoll: Number,
    };
  },
  methods: {
    lookFull() {
      this.curScoll = window.scrollY;
      document.querySelector("body").style.overflow = "hidden";
      this.fullSize = !this.fullSize;
    },
    lookReqular() {
      document.querySelector("body").style.overflow = "visible";
      this.fullSize = !this.fullSize;
      window.scrollTo(0, this.curScoll);
    },
  },
  components: {
    FullPhoto,
  },
  mixins: [whiteBg],
};
</script>

<style scoped>
.grid_check_wrap button {
  z-index: 2;
}
</style>
