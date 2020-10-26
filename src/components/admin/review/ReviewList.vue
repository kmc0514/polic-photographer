<template>
  <div>
    <div id="wrap" class="wrap_type_normal">
      <div class="space_wrap">
        <h3>후기 32건</h3>
        <review-item></review-item>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewItem from "@C/admin/review/ReviewItem";

export default {
  components: {
    ReviewItem,
  },
};
</script>

<style></style>
