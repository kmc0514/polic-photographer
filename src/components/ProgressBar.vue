<template>
  <div class="progress_bar">
    <div class="gauge" :style="{ width: curGauge }"></div>
  </div>
</template>

<script>
export default {
  props: ["curGauge"],
};
</script>

<style></style>
