<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    console.log("생성: ", this.$store.state.headerTabOn);
    this.$store.state.headerTabOn = false;
  },
  mounted() {
    console.log("탭 꺼짐: ", this.$store.state.headerTabOn);
  },
  beforeDestory() {
    this.$store.state.headerTabOn = true;
    console.log("켜짐: ", this.$store.state.headerTabOn);
  },
};
</script>

<style></style>
