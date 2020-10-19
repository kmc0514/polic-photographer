<template>
  <header id="header" :class="{ sticky_header: tabStyle, bbn: tabStyle }">
    <div class="menu" @click="showMenu">
      <a href="#" title="메뉴"><img src="../images/menu.png" alt="메뉴"/></a>
    </div>
    <h1>
      <router-link v-if="mainStyleHeader" to="/"
        ><img src="../images/logo.png" alt="polic" class="logo"
      /></router-link>
      <slot v-else>
        <!-- 페이지 제목 -->
      </slot>
    </h1>
    <div v-show="mainStyleHeader" class="alarm">
      <router-link to="/setting/alarm">
        <img src="../images/bell.png" alt="알림" />
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      mainStyleHeader: Boolean,
      tabStyle: Boolean,
    };
  },
  methods: {
    showMenu() {
      this.$emit("onMenu");
    },
    changeHeader() {
      if (this.$route.meta.type === "main") {
        this.mainStyleHeader = true;
        this.tabStyle = true;
      } else if (this.$route.path.includes("/trade")) {
        this.mainStyleHeader = false;
        this.tabStyle = true;
      } else {
        this.mainStyleHeader = false;
        this.tabStyle = false;
      }
    },
  },
  updated() {
    this.changeHeader();
  },
};
</script>

<style></style>
