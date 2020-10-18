<template>
  <div class="tab pink_ver" id="myHeader">
    <ul>
      <slot>
        <!-- 탭 링크 들어가는 곳 -->
      </slot>
    </ul>
  </div>
</template>

<script>
export default {
  // updated() {
  //   document.querySelector("#header").classList.add("sticky_header", "bbn");
  // },
  // beforeDestroy() {
  //   document.querySelector("#header").classList.remove("sticky_header", "bbn");
  // },
};
</script>

<style></style>
