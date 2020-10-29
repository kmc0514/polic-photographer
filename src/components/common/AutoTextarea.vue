<template>
  <div>
    <textarea
      :placeholder="placeholder"
      @keydown="getTextLength"
      :maxlength="maxLength"
      ref="textarea"
    ></textarea>
    <p class="text_num">{{ text_length }}&#47;{{ maxLength }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text_length: "0",
    };
  },
  watch: {
    text_length() {
      this.setAreaHeight();
    },
  },
  props: {
    minLength: String,
    maxLength: String,
    placeholder: String,
  },
  methods: {
    getTextLength() {
      this.text_length = this.$refs.textarea.value.length;
    },
    setAreaHeight() {
      const e = this.$refs.textarea;
      e.style.height = 2 + e.scrollHeight + "px";
    },
  },
};
</script>

<style scoped>
textarea {
  border: none;
  border-bottom: 1px solid #e0e0e0;
  border-radius: none;
  height: 50px;
  font-size: 16px;
}

textarea:focus {
  border-bottom: 2px solid #ff635f;
}

.text_num {
  text-align: left;
  padding-left: 8px;
  font-size: 14px;
}
</style>
