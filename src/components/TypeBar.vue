<template>
  <div>
    <div class="main_state" v-bind:class="{ none_start: typeStatus }">
      <!-- 판매 비활성화시 none_start-->
      <p>버튼을 눌러 판매를 시작하세요.</p>
      <div class="check-wrapper">
        <input
          type="checkbox"
          value="one"
          id="check1"
          name="check-1"
          ref="type"
          @click="changeType"
        />
        <label for="check1" class="check-label">
          <span> </span>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeStatus: Boolean,
    };
  },
  methods: {
    changeType() {
      this.typeStatus = !this.$refs.type.checked;
    },
  },
};
</script>

<style></style>
