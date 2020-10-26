<template>
  <div class="tab pink_ver" id="myHeader" ref="myHeader">
    <ul>
      <slot>
        <!-- 탭 링크 들어가는 곳 -->
      </slot>
    </ul>
  </div>
</template>

<script>
import { fixTab } from "@/mixins/fixTab.js";

export default {
  mixins: [fixTab],
};
</script>

<style scoped></style>
