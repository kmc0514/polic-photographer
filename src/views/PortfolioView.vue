<template>
  <div id="wrap" class="wrap_type_tab">
    <div class="fixed_btn">
      <router-link to="/setting/write"
        ><img src="@/images/request_ico.png" alt="요청서"
      /></router-link>
    </div>
    <div class="grid">
      <div class="grid-sizer"></div>
      <div class="grid-item">
        <div class="grid_check_wrap">
          <button type="button"><img src="@/images/photo_del.png" /></button>
          <a class="" href="#" data->
            <img src="../images/sample_img01.png" alt="" />
          </a>
        </div>
      </div>
      <div class="grid-item">
        <div class="grid_check_wrap">
          <button type="button"><img src="../images/photo_del.png" /></button>
          <a class="" href="#" data->
            <img src="../images/sample_img02.png" alt="" />
          </a>
        </div>
      </div>
      <div class="grid-item">
        <div class="grid_check_wrap">
          <button type="button"><img src="../images/photo_del.png" /></button>
          <a class="" href="#" data->
            <img src="../images/sample_img03.png" alt="" />
          </a>
        </div>
      </div>
      <div class="grid-item">
        <div class="grid_check_wrap">
          <button type="button"><img src="../images/photo_del.png" /></button>
          <a class="" href="#" data->
            <img src="../images/sample_img04.png" alt="" />
          </a>
        </div>
      </div>
      <div class="grid-item">
        <div class="grid_check_wrap">
          <button type="button"><img src="../images/photo_del.png" /></button>
          <a class="" href="#" data->
            <img src="../images/sample_img05.png" alt="" />
          </a>
        </div>
      </div>
      <div class="grid-item">
        <div class="grid_check_wrap">
          <button type="button"><img src="../images/photo_del.png" /></button>
          <a class="" href="#" data->
            <img src="../images/sample_img06.png" alt="" />
          </a>
        </div>
      </div>
      <div class="grid-item">
        <div class="grid_check_wrap">
          <button type="button"><img src="../images/photo_del.png" /></button>
          <a class="" href="#" data->
            <img src="../images/sample_img07.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector("html").classList.add("white_bg");
  },
  beforeDestroy() {
    document.querySelector("html").classList.remove("white_bg");
  },
};
</script>

<style scoped></style>
