<template>
  <div>
    <!--메인관련 헤더 sticky_header 생성 -->
    <template v-if="isSetting">
      <setting-header>
        {{ pageTitle }}
      </setting-header>
    </template>
    <template v-else>
      <main-header v-on:onMenu="onOffSideMenu">
        {{ pageTitle }}
      </main-header>
    </template>
    <side-nav-modal v-show="showSideMenu" @close="showSideMenu = false">
    </side-nav-modal>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import SettingHeader from "@/components/SettingHeader.vue";
import SideNavModal from "@/components/SideNavModal.vue";

export default {
  data() {
    return {
      showSideMenu: false,
      pageTitle: String,
    };
  },
  props: ["isSetting"],
  methods: {
    onOffSideMenu() {
      this.showSideMenu = !this.showSideMenu;
    },
  },
  components: {
    MainHeader,
    SettingHeader,
    SideNavModal,
  },
  updated() {
    this.pageTitle = this.$route.meta.title;
  },
};
</script>

<style></style>
