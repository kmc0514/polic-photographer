<template>
  <transition name="modal">
    <div v-if="open" class="modal-mask" @click="open = false">
      <div class="popup_wrap">
        <!-- Use Only ReqModal.vue -->
        <slot name="message"></slot>
        <slot :data="type"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import { bus } from "@/utils/bus";

export default {
  data() {
    return {
      open: false,
      type: "",
    };
  },
  props: ["sidemenu"],
  mounted() {
    bus.$on("showModal", (e) => {
      this.open = true;
      this.type = e;
      console.log(e);
    });
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
