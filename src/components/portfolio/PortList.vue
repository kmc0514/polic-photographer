<template>
  <div>
    <div id="wrap" class="wrap_type_tab">
      <div class="fixed_btn">
        <router-link to="/register/upload"
          ><img src="@/assets/images/request_ico.png" alt="요청서"
        /></router-link>
      </div>
      <masonry :cols="2" :gutter="8" class="masonry_box">
        <div v-for="(item, index) in imgArr" :key="index" class="masonry-item">
          <div class="masonry-item-wrap">
            <button type="button">
              <img src="@/assets/images/photo_del.png" />
            </button>
            <a class="" href="#" @click="lookFull">
              <progressive-img
                :src="require(`@/assets/images/sample_${item}.png`)"
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
      activeTitle: "",
      authorID: 2,
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
    async loadAuthorDetail(authorID) {
      this.loadingFlag = true;

      let headers = {
        //'token': 'ef59a1297ddfd2f632a8b17d124fb366',
        tos: "author_profile",
      };

      let params = {
        photographer_id: authorID,
      };

      await this.$store.dispatch("FETCH_REQUEST_AUTHOR_DETAIL", {
        headers,
        params,
      });

      console.log("loaded author profile: ", authorID);

      let idx = this.getAuthorInfo.portfolioList.findIndex(
        (element) => element.id === this.$route.query.photo_id
      );

      if (idx > -1) {
        this.swiperOption.initialSlide = idx;
      } else {
        idx = 0;
      }

      this.activeTitle = this.getAuthorInfo.portfolioList[idx].title;
      this.authorID = authorID;

      this.loadingFlag = false;
    },

    // 임시방편 수정하세요.
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
  mounted() {
    this.loadAuthorDetail(123456789);
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
