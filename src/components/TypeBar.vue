<template>
  <div>
    <div class="main_state" v-bind:class="{ none_start: !onSaleGetter }">
      <p>버튼을 눌러 판매를 시작하세요.</p>
      <div class="check-wrapper">
        <input
          type="checkbox"
          value="one"
          id="check1"
          name="check-1"
          ref="typeBox"
          v-model="typeStatus"
        />
        <label for="check1" class="check-label">
          <span></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      typeStatus: Boolean,
    };
  },
  watch: {
    typeStatus() {
      this.convertSaleMode();
    },
  },
  computed: {
    ...mapGetters(["onSaleGetter"]),
  },
  methods: {
    convertSaleMode() {
      this.$store.state.onSale = this.typeStatus;
    },
  },
  mounted() {
    this.$refs.typeBox.checked = this.onSaleGetter;
  },
};
</script>

<style></style>
