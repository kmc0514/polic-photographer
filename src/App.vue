<template>
  <div>
    <header-bar
      v-if="headerVisible"
      v-bind:isSetting="settingPage"
    ></header-bar>
    <header-tab v-if="showMainTab"></header-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from "./components/HeaderBar.vue";
import HeaderTab from "./components/HeaderTab.vue";

export default {
  data() {
    return {
      showMainTab: Boolean,
      settingPage: Boolean,
      headerVisible: Boolean,
    };
  },
  methods: {
    loadLoginPage() {
      if (this.$store.state.logIn === false) {
        this.$router.push("login");
      }
    },
    onOffTab() {
      const curPageType = this.$route.meta.type;
      if (curPageType === "main") {
        this.showMainTab = true;
      } else {
        this.showMainTab = false;
      }
    },
    settingHeader() {
      const curPath = this.$route.path;
      if (curPath.includes("/login")) {
        this.headerVisible = false;
      } else {
        this.headerVisible = true;
      }
      if (curPath.includes("/setting")) {
        this.settingPage = true;
      } else {
        this.settingPage = false;
      }
    },
  },
  components: {
    HeaderBar,
    HeaderTab,
  },
  mounted() {
    this.onOffTab();
  },
  updated() {
    this.onOffTab();
    this.settingHeader();
  },
  created() {
    this.loadLoginPage();
  },
};
</script>

<style scoped>
a:focus {
  color: none;
}
</style>
