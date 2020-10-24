<template>
  <div class="acc_box">
    <slot name="title">
      <!-- 제목을  입력하세요.-->
    </slot>
    <div class="title_input_box">
      <template v-if="numType">
        <number-controller>
          <slot name="setUnit">
            <!-- 단위를 입력하세요. -->
          </slot>
        </number-controller>
      </template>
      <template v-else>
        <p class="left_text">
          <slot name="setUnit">
            <!-- 단위를 입력하세요. -->
          </slot>
        </p>
      </template>
      <div class="price_box">
        <input type="text" placeholder="0" />
        <p>
          <slot name="inputUnit">
            <!-- 단위를 입력하세요. -->
          </slot>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NumberController from "@C/common/NumberController.vue";

export default {
  props: {
    numType: Boolean,
  },
  components: {
    NumberController,
  },
};
</script>

<style></style>
