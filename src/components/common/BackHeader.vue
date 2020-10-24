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
  </header>
</template>

<script>
export default {
  data() {
    return {
      isProductSet: Boolean,
      pageTitle: String,
    };
  },
  methods: {
    productSetPage() {
      if (this.$route.meta.type === "product") {
        this.isProductSet = true;
      } else {
        this.isProductSet = false;
      }
    },
  },
  created() {
    this.productSetPage();
  },
};
</script>

<style></style>
