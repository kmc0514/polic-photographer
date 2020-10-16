<template>
  <header id="header" class="sticky_header bbn">
    <!--메인관련 헤더 sticky_header 생성 -->
    <div class="menu" @click="getModal">
      <a href="#" title="메뉴"><img src="../images/menu.png" alt="메뉴"/></a>
    </div>
    <h1>
      <router-link to="/"
        ><img src="../images/logo.png" alt="polic" class="logo"
      /></router-link>
    </h1>
    <div class="alarm">
      <a href="#" title="알림"><img src="../images/bell.png" alt="알림"/></a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    getModal() {
      this.$emit("changeModal");
      console.log("get");
    },
  },
  created() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {
      myFunction();
    };

    // Get the header
    var header = document.getElementById("myHeader");

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
  },
};
</script>

<style></style>
