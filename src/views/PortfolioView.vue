<template>
  <div>
    <div id="wrap" class="wrap_type_tab">
      <div class="fixed_btn">
        <router-link to="/setting/write"
          ><img src="@/images/request_ico.png" alt="요청서"
        /></router-link>
      </div>
      <masonry :cols="2" :gutter="8" class="masonry_box">
        <div v-for="(item, index) in imgArr" :key="index" class="masonry-item">
          <div class="masonry-item-wrap">
            <button type="button"><img src="@/images/photo_del.png" /></button>
            <a class="" href="#" @click="lookFull">
              <progressive-img
                :src="require(`../images/sample_${item}.png`)"
                alt=""
              />
            </a>
          </div>
        </div>
      </masonry>
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
.masonry_box {
  padding: 12px 8px;
}

.masonry-item {
  margin-bottom: 6px;
}

.masonry-item .progressive-image {
  border-radius: 8px;
}

.masonry-item-wrap {
  position: relative;
}
.masonry-item-wrap button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  width: 24px;
  padding: 0;
  background: none;
  border: none;
  z-index: 2;
}
</style>
