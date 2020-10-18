<template>
  <header id="header" class="bbn" v-bind:class="{ sticky_header: !isSetting }">
    <!--메인관련 헤더 sticky_header 생성 -->
    <template v-if="isSetting">
      <div class="back" @click="$router.back()">
        <a href="#" title="뒤로가기"
          ><img src="@/images/back.png" alt="뒤로가기"
        /></a>
      </div>
      <div class="right_text" @click="$router.push('/product')">
        <a href="#" title="링크 이동">저장 후 나가기</a>
      </div>
    </template>
    <template v-else>
      <div class="menu" @click="showMenu">
        <a href="#" title="메뉴"><img src="../images/menu.png" alt="메뉴"/></a>
      </div>
      <h1>
        <router-link to="/"
          ><img src="../images/logo.png" alt="polic" class="logo"
        /></router-link>
      </h1>
      <div class="alarm">
        <a href="#" title="알림"><img src="../images/bell.png" alt="알림"/></a>
      </div>
    </template>
  </header>
</template>

<script>
export default {
  props: ["isSetting"],
  methods: {
    showMenu() {
      this.$emit("onMenu");
      console.log("get");
    },
  },
  created() {},
};
</script>

<style></style>
