<template>
  <span class="star_box" ref="stars">
    <span class="star star_left"></span>
    <span class="star star_right"></span>

    <span class="star star_left"></span>
    <span class="star star_right"></span>

    <span class="star star_left"></span>
    <span class="star star_right"></span>

    <span class="star star_left"></span>
    <span class="star star_right"></span>

    <span class="star star_left"></span>
    <span class="star star_right"></span>
  </span>
</template>

<script>
export default {
  props: ["rating"],
  methods: {
    onStars() {
      let r = this.rating * 2;
      for (r; r > 0; r = r - 1) {
        this.$refs.stars.childNodes[this.rating * 2 - r].classList.add("on");
      }
    },
  },
  mounted() {
    this.onStars();
  },
};
</script>

<style scoped>
.star {
  width: 15px;
}
</style>
