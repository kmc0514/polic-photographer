<template>
  <div>
    <header-bar v-on:changeModal="changer"></header-bar>
    <side-nav-modal v-show="showModal" @close="showModal = false">
    </side-nav-modal>
    <header-tab></header-tab>
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
      showModal: false,
    };
  },
  methods: {
    changer() {
      console.log("got");
      this.showModal = !this.showModal;
    },
  },
  components: {
    HeaderBar,
    SideNavModal,
    HeaderTab,
  },
};
</script>

<style></style>
