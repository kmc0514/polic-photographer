<template>
  <header id="header" :class="{ bbn: isProductSet }">
    <div class="back" @click="$router.back()">
      <a href="#" title="뒤로가기"
        ><img src="@/assets/images/back.png" alt="뒤로가기"
      /></a>
    </div>
    <h1 v-if="!isProductSet">
      <slot>
        <!-- 페이지 제목 -->
      </slot>
    </h1>
    <div
      v-show="isProductSet"
      class="right_text"
      @click="$router.push('/main/product')"
    >
      <a href="#" title="링크 이동">저장 후 나가기</a>
    </div>
    <div v-show="isDetail" class="right_text colPink" @click="$router.back()">
      <a href="#" title="확인">확인</a>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isProductSet: Boolean,
      isDetail: false,
      pageTitle: String,
    };
  },
  methods: {
    setRightBtn() {
      if (this.$route.meta.type === "product") {
        this.isProductSet = true;
      } else {
        this.isProductSet = false;
      }
      if (this.$route.path === "/detail") {
        this.isDetail = true;
      } else {
        this.isDetail = false;
      }
    },
  },
  created() {
    this.setRightBtn();
  },
};
</script>

<style></style>
