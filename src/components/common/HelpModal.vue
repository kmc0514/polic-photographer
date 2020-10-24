<template>
  <div class="footer_pop">
    <div class="footer_pop_header">
      <a href="#" class="close"><img src="./images/cloes.png"/></a>
    </div>
    <div class="footer_pop_contents" v-html="helpContents"></div>
  </div>
</template>

<script>
import { priceHelp } from "./helpData.js";

export default {
  data() {
    return {
      helpContents: "",
    };
  },
  mounted() {
    this.helpContents = priceHelp;
  },
};
</script>

<style></style>
