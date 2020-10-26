<template>
  <div>
    <header id="header" :class="{ sticky_header: needTab, bbn: needTab }">
      <div class="menu" @click="showMenu">
        <a href="#" title="메뉴"
          ><img src="@/assets/images/menu.png" alt="메뉴"
        /></a>
      </div>
      <h1>
        <router-link v-if="isMain" to="request"
          ><img src="@/assets/images/logo.png" alt="polic" class="logo"
        /></router-link>
        <slot v-else>
          <!-- 페이지 제목 -->
        </slot>
      </h1>
      <div v-show="isMain" class="alarm">
        <router-link to="/register/alarm">
          <img src="@/assets/images/bell.png" alt="알림" />
        </router-link>
      </div>
    </header>
    <side-menu v-show="showSideMenu" @close="showSideMenu = false"></side-menu>
  </div>
</template>

<script>
import SideMenu from "@C/SideMenu.vue";

export default {
  data() {
    return {
      needTab: false,
      showSideMenu: false,
    };
  },
  props: {
    isMain: Boolean,
  },
  components: {
    SideMenu,
  },
  methods: {
    showMenu() {
      this.showSideMenu = !this.showSideMenu;
    },
    changeHeader() {
      if (this.isMain || this.$route.path.includes("/trade")) {
        this.needTab = true;
      } else {
        this.needTab = false;
      }
    },
  },
  updated() {
    this.changeHeader();
  },
  created() {
    this.changeHeader();
  },
};
</script>

<style></style>
