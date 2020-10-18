<template>
  <div class="bottom_btn_wrap mb20">
    <!-- 활성화 시 bottom_btn_pink -->
    <button
      type="button"
      class="bottom_btn_gray"
      @click="$router.push(`${nextUrl}`)"
    >
      <slot>
        <!-- 버튼 이름을 나타내세요. -->
      </slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    nextUrl: String,
  },
};
</script>

<style></style>
