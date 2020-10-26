<template>
  <register-slot>
    <template slot="title">보정 스타일 소개하기</template>
    <template slot="subtitle"
      >같은 사진의 원본과 보정본을 비교하여 작가님의 보정 스타일을 보여줄 수
      있어요.</template
    >
    <div slot="contents" class="box">
      <div class="photo_upload_box">
        <div class="photo_upload">
          <h3>원본</h3>
          <div class="preview_box">
            <a
              href="#"
              class="upload_preview"
              style="background-image: url(./images/sample_img01.png)"
            ></a>
          </div>
        </div>
        <div class="photo_upload">
          <h3>보정본</h3>
          <div class="preview_box">
            <a
              href="#"
              class="upload_preview"
              style="background-image: url(./images/photo_upload.png)"
            ></a>
          </div>
          <p class="small_alarm_txt">원본과 사진의 크기가 다릅니다.</p>
        </div>
      </div>
    </div>
  </register-slot>
</template>

<script>
import RegisterSlot from "./RegisterSlot.vue";

export default {
  components: {
    RegisterSlot,
  },
  created() {
    this.$emit("sentBtnData", "계속하기", "guide");
  },
};
</script>

<style></style>
