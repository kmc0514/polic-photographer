<template>
  <div>
    <div id="wrap" class="wrap_type_normal footer_btn_ver">
      <!-- 하단 버튼 추가시 footer_btn_ver 추가 -->
      <div class="box">
        <div class="info_box">
          <h2>보정 스타일 소개하기</h2>
          <p>
            깉은 사진의 원본과 보정본을 비교하여 작가님의 보정 스타일을 보여줄
            수 있어요.
          </p>
        </div>
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
    </div>

    <div class="bottom_btn_wrap mb20">
      <button type="button" class="bottom_btn_gray">계속하기</button
      ><!-- 활성화시 bottom_btn_pink으로 변경 -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
