<template>
  <div>
    <div id="wrap" class="wrap_type_tab">
      <div class="fixed_btn">
        <router-link to="/register/upload"
          ><img src="@/assets/images/request_ico.png" alt="요청서"
        /></router-link>
      </div>
      <masonry :cols="2" :gutter="8" class="masonry_box">
        <div
          v-for="photo in photoListGetter"
          :key="photo.id"
          class="masonry-item"
        >
          <div class="masonry-item-wrap">
            <button type="button">
              <img src="@/assets/images/photo_del.png" />
            </button>
            <a @click="showPhotoView(photo.id)">
              <progressive-img :src="photo.photo_expand" alt="" />
            </a>
          </div>
        </div>
      </masonry>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { whiteBg } from "@/mixins/whiteBg.js";

export default {
  computed: {
    ...mapGetters(["photoListGetter"]),
  },
  methods: {
    async loadAuthorDetail(authorID) {
      let headers = {
        tos: "author_profile",
      };

      let params = {
        photographer_id: authorID,
      };

      await this.$store.dispatch("FETCH_AUTHOR_DETAIL", {
        headers,
        params,
      });

      console.log("loaded author profile: ", authorID);
    },
    showPhotoView(photo_id) {
      this.$router.push({
        path: "/photoview",
        query: { photo_id },
      });
    },
  },
  mounted() {
    this.loadAuthorDetail(this.$store.state.id);
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
