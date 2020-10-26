<template>
  <div class="footer_pop">
    <div class="footer_pop_header">
      <a href="#" class="close"><img src="@/assets/images/cloes.png"/></a>
    </div>
    <div class="footer_pop_contents" v-html="helpContents"></div>
  </div>
</template>

<script>
import { priceHelp, amountHelp, salePolicy } from "@C/common/helpData.js";

export default {
  data() {
    return {
      helpContents: "",
    };
  },
  props: ["helpType"],
  methods: {
    getData(props) {
      if (props === "price") {
        this.helpContents = priceHelp;
      } else if (props === "amount") {
        this.helpContents = amountHelp;
      } else if (props === "policy") {
        this.helpContents = salePolicy;
      }
    },
  },
  mounted() {
    this.getData(this.helpType.data);
  },
};
</script>

<style></style>
