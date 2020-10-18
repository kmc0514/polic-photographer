<template>
  <div>
    <header-bar
      v-on:onMenu="onOffSideMenu"
      v-bind:isSetting="settingPage"
    ></header-bar>
    <side-nav-modal v-show="showSideMenu" @close="showSideMenu = false">
    </side-nav-modal>
    <header-tab v-if="!settingPage"></header-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import HeaderTab from "./components/HeaderTab.vue";
import SideNavModal from "./components/SideNavModal.vue";

export default {
  data() {
    return {
      showSideMenu: false,
      settingPage: Boolean,
    };
  },
  methods: {
    onOffSideMenu() {
      this.showSideMenu = !this.showSideMenu;
    },
    onOffTab() {
      const curUrl = this.$route.path;
      if (curUrl.includes("/setting")) {
        this.settingPage = true;
      } else {
        this.settingPage = false;
      }
    },
  },
  components: {
    HeaderBar,
    SideNavModal,
    HeaderTab,
  },
  mounted() {
    this.onOffTab();
  },
  updated() {
    this.onOffTab();
  },
};
</script>

<style></style>
