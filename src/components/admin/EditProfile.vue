<template>
  <div id="wrap" class="wrap_type_normal footer_btn_ver">
    <!-- 하단 버튼 추가시 footer_btn_ver 추가 -->
    <div class="photo_grapher_info_wrap">
      <div class="photo_grapher_info">
        <div class="img_box"></div>
        <a href="#"
          ><img src="@/assets/images/my_photo_edit.png" alt="프로필 변경"
        /></a>
      </div>
    </div>
    <div class="profile_line_box">
      <h3>작가명</h3>
      <input type="text" placeholder="작가명을 입력해주세요" class="mb0" />
    </div>
    <div class="profile_line_box">
      <h3>이메일</h3>
      <p class="text_normal">abc1234@email.com</p>
    </div>
    <div class="profile_line_box">
      <h3>비밀번호 변경</h3>
      <div class="contents_box">
        <input type="password" placeholder="새로운 비밀번호를 입력하세요." />
        <input
          type="password"
          placeholder="비밀번호를 한번 더 입력하세요."
          class="mb0"
        />
      </div>
    </div>
    <div class="profile_line_box">
      <h3>휴대폰 인증</h3>
      <div class="contents_box">
        <div class="input_button_type">
          <input type="text" placeholder="번호를 입력하세요." />
          <button type="button" class="button_pink_type01">재전송</button>
        </div>
        <div class="input_button_type">
          <div class="confirm_num">
            <input type="text" placeholder="인증번호를 입력하세요." />
            <small class="time_view">3:00</small>
          </div>
          <button type="button" class="button_gray_type02">인증완료</button>
        </div>
      </div>
    </div>

    <div class="my_footer_link">
      <p><a href="#" title="로그아웃">로그아웃</a></p>
      <p><a href="#" title="회원탈퇴">회원탈퇴</a></p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit("sentBtnData", "변경된 정보 저장하기", "/config");
  },
};
</script>

<style></style>
