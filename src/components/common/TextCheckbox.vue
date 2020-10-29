<template>
  <div class="text_checkbox">
    <input
      type="checkbox"
      :id="id"
      name="round_check03"
      :style="{ width: inputWidth, height: inputHeight }"
    />
    <label :for="id" ref="labeling">{{ text }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputWidth: "72px",
      inputHeight: "28px",
    };
  },
  props: {
    id: String,
    text: String,
  },
  methods: {
    setSize() {
      const curWidth = this.$refs.labeling.offsetWidth;
      const curHeight = this.$refs.labeling.offsetHeight;
      this.inputWidth = `${curWidth}px`;
      this.inputHeight = `${curHeight}px`;
    },
  },
  mounted() {
    this.setSize();
  },
};
</script>

<style scoped>
.text_checkbox {
  display: inherit;
  margin-right: 6px;
}

.text_checkbox label {
  position: relative;
  color: #989898;
  font-size: 14px;
  text-align: center;
  padding: 8px 12px;
  border: 1px solid #989898;
  border-radius: 30px;
  background: transparent;
}

.text_checkbox input[type="checkbox"] {
  -webkit-appearance: none;
  border: none;
  padding: none;
}
.text_checkbox input[type="checkbox"] {
  position: absolute;
  color: #ff635f;
  border: 1px solid #989898;
  z-index: 9999;
}
.text_checkbox input[type="checkbox"]:checked {
  border: 1px solid #ff635f;
}
.text_checkbox input[type="checkbox"]:checked + label {
  color: #ff635f;
  border: 1px solid #ff635f;
}
</style>
