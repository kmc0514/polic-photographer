export const fixTab = {
  methods: {
    fixHeader() {
      const header = this.$refs.myHeader;
      const sticky = header.offsetTop;

      const myFunction = () => {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      };

      window.onscroll = function() {
        myFunction();
      };
    },
  },
  mounted() {
    this.fixHeader();
  },
};
