<template>
  <div>
    <div id="wrap" class="wrap_type_tab">
      <div class="fixed_btn">
        <router-link to="/setting/write"
          ><img src="@/images/request_ico.png" alt="요청서"
        /></router-link>
      </div>
      <div class="grid">
        <div class="grid-item" v-for="item in imgArr" :key="item">
          <!-- block item markup -->
          <div class="grid_check_wrap">
            <button type="button"><img src="@/images/photo_del.png" /></button>
            <a class="" href="#" @click="lookFull">
              <img :src="require(`../images/sample_${item}.png`)" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- <full-photo v-show="fullSize" :off="fullSize"></full-photo> -->
  </div>
</template>

<script>
// import FullPhoto from "@/components/FullPhoto.vue";
import { whiteBg } from "@/mixins/whiteBg.js";

export default {
  data() {
    return {
      imgArr: ["img01", "img02", "img03", "img04", "img05", "img06", "img07"],
      fullSize: Boolean,
    };
  },
  methods: {
    lookFull() {
      this.fullSize = true;
    },
  },
  components: {
    // FullPhoto,
  },
  mixins: [whiteBg],
};
</script>

<style scoped></style>
