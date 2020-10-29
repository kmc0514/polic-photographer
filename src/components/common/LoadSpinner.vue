<template>
  <div class="spinner_wrap">
    <fade-loader
      v-if="loading"
      :width="style.width"
      :height="style.height"
      :color="style.color"
    ></fade-loader>
  </div>
</template>

<script>
import FadeLoader from "vue-spinner/src/FadeLoader.vue";

export default {
  data() {
    return {
      style: {
        width: "4px",
        height: "12px",
        color: "#ff635f",
      },
    };
  },
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
