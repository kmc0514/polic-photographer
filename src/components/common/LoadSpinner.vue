<template>
  <div class="spinner_wrap">
    <fade-loader v-if="loading" :color="red"></fade-loader>
  </div>
</template>

<script>
import FadeLoader from "vue-spinner/src/FadeLoader.vue";

export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    FadeLoader,
  },
};
</script>

<style scoped>
.spinner_wrap {
  position: absolute;
  top: 50%;
  left: 48%;
  z-index: 9999;
}
</style>
