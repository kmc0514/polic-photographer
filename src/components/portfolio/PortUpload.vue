<template>
  <div>
    <div id="wrap" class="wrap_type_normal footer_btn_ver">
      <!-- 하단 버튼 추가시 footer_btn_ver 추가 -->
      <div class="portfolio_upload">
        <a href="#" class="upload_link"></a>
      </div>
      <div class="simple_box">
        <input type="text" placeholder="제목을 입력하세요." />
      </div>
      <div class="simple_box">
        <a href="#" class="address_text"
          ><input type="text" placeholder="위치를 추가하세요."/><img
            src="@/assets/images/agree_more.png"
            class="right_more"
        /></a>
      </div>
      <div class="box">
        <h4>태그 적용</h4>
        <div class="check_box_wrap">
          <div class="round_check text05">
            <input type="checkbox" id="check01" name="round_check" />
            <label for="check01">개인&#47;프로필</label>
          </div>
          <div class="round_check">
            <input type="checkbox" id="check02" name="round_check" />
            <label for="check02">가족사진</label>
          </div>
          <div class="round_check">
            <input type="checkbox" id="check03" name="round_check" />
            <label for="check03">커플사진</label>
          </div>
          <div class="round_check">
            <input type="checkbox" id="check04" name="round_check" />
            <label for="check04">우정사진</label>
          </div>
          <div class="round_check">
            <input type="checkbox" id="check05" name="round_check02" />
            <label for="check05">아기&#47;돌</label>
          </div>
          <div class="round_check">
            <input type="checkbox" id="check06" name="round_check02" />
            <label for="check06">주니어</label>
          </div>
          <div class="round_check">
            <input type="checkbox" id="check07" name="round_check03" />
            <label for="check07">돌잔치</label>
          </div>
          <div class="round_check">
            <input type="checkbox" id="check08" name="round_check03" />
            <label for="check08">가족행사</label>
          </div>
          <div class="round_check text05">
            <input type="checkbox" id="check09" name="round_check03" />
            <label for="check09">무대&#47;콘서트</label>
          </div>
          <div class="round_check">
            <input type="radio" id="check10" name="round_check03" />
            <label for="check10">기업행사</label>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom_btn_wrap mb20">
      <button type="button" class="bottom_btn_pink">게시하기</button>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("sentBtnData", "사진 업로드", "/main/portfolio");
  },
};
</script>

<style></style>
