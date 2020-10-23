<template>
  <div>
    <div class="tab tab_type04" id="myHeader" ref="myHeader">
      <ul>
        <li><router-link to="/main/request">촬영요청</router-link></li>
        <li><router-link to="/main/reserve">예약목록</router-link></li>
        <li><router-link to="/main/product">촬영상품</router-link></li>
        <li><router-link to="/main/portfolio">포트폴리오</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    fixHeader() {
      // Get the header
      var header = this.$refs.myHeader;

      // Get the offset position of the navbar
      var sticky = header.offsetTop;

      // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }

      // When the user scrolls the page, execute myFunction
      window.onscroll = function() {
        myFunction();
      };
    },
  },
  mounted() {
    this.fixHeader();
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: #3b3b3b;
  font-weight: 600;
}

.router-link-exact-active::after {
  content: "";
  display: block;
  height: 2px;
  width: 100%;
  text-align: center;
  margin: -2px auto 0;
  background: #3b3b3b;
}
</style>
