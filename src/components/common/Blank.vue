<template>
  <div class="blank_wrap">
    <img src="@/assets/images/shooting_none.png" alt="" />
    <h3>아직 촬영요청이 없어요.</h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.blank_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin-top: 96px;
}

.blank_wrap img {
  width: 96px;
  margin-bottom: 16px;
}
.blank_wrap h3 {
  font-size: 14px;
  font-weight: 600;
}
</style>
