<template>
  <div>
    <div id="wrap" class="wrap_type_normal footer_btn_ver">
      <!-- 하단 버튼 추가시 footer_btn_ver 추가 -->
      <div class="box mt10">
        <div class="info_box ">
          <h2>촬영 요금을 설정하기</h2>
          <p>촬영 테마별로 알맞은 요금을 책정하세요.</p>
          <p>
            <a href="#" class="question_txt"
              >폴릭 요금 체계 알아보기
              <img src="../images/question_mark.png" alt="알아보기"
            /></a>
          </p>
        </div>
        <div class="select_list02 type02">
          <h3 class="left_title">제공 형식</h3>
          <div class="right_box">
            <div class="round_check text05">
              <input type="radio" id="check01" name="round_check" />
              <label for="check01">원본제공형</label>
            </div>
            <div class="round_check text05">
              <input type="radio" id="check02" name="round_check" />
              <label for="check02">색감보정형</label>
            </div>
          </div>
        </div>
        <p class="small_txt02">
          기본 설정을 완료하면
          <a href="#" class="under_line">폴릭 예약 취소 및 환불 규정</a>에
          동의하는 것으로 간주합니다.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
