export const whiteBg = {
  mounted() {
    document.querySelector("html").classList.add("white_bg");
  },
  beforeDestroy() {
    document.querySelector("html").classList.remove("white_bg");
  },
};
