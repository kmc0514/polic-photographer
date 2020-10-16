<template>
  <div>
    <div id="wrap" class="wrap_type_normal footer_btn_ver">
      <!-- 하단 버튼 추가시 footer_btn_ver 추가 -->
      <div class="box">
        <div class="info_box">
          <h2>유의사항 작성하기</h2>
          <p>예약 및 촬영 진행 시 유의사항을 안내하세요.</p>
        </div>
        <textarea
          class="bottom_line"
          placeholder="내용을 입력하세요."
          onkeydown="resize(this)"
          onkeyup="resize(this)"
        ></textarea>
        <p class="text_num">0&#47;30</p>
        <button type="button" class="button_style01 fr mt5 mb25">확인</button>
        <ul class="write_list">
          <li>
            <i>약속 시간에 늦지 않게 도착해주세요.</i
            ><button type="button" class="list_del">
              <img src="../images/list_del.png" />
            </button>
          </li>
          <li>
            <i>지각한 시간도 촬영시간에 포함됩니다.</i
            ><button type="button" class="list_del">
              <img src="../images/list_del.png" />
            </button>
          </li>
          <li>
            <i>상호 간 예의를 지켜주세요.</i
            ><button type="button" class="list_del">
              <img src="../images/list_del.png" />
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="bottom_btn_wrap mb20">
      <button type="button" class="bottom_btn_pink">작성 완료하기</button
      ><!-- 활성화시 bottom_btn_pink으로 변경 -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
