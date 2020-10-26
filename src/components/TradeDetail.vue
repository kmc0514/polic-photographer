<template>
  <div id="wrap" class="wrap_type_normal ">
    <back-header></back-header>
    <div class="simple_profile">
      <div
        class="profile_img"
        style="background-image:url('./images/profile_img02.png')"
      >
        <a href="#" alt="작가 상세보기">프로필 사진</a>
      </div>
      <p class="photo_grapher_name"><a href="#">홍길동</a></p>
    </div>

    <div class="box_line">
      <ul>
        <li>가족스냅 / 8명 / 2시간</li>
        <li>2020.06.30</li>
        <li>경기도 의정부시 녹양로62번길 12, 123-4567</li>
        <li>
          <input
            type="text"
            placeholder="상세장소를 입력하세요."
            class="mb0 mt8"
          />
        </li>
      </ul>
    </div>

    <div class="box_line">
      <dl class="dl_row">
        <dt>촬영시작</dt>
        <dd class="colGray">설정</dd>
      </dl>
      <dl class="dl_row">
        <dt>촬영종료</dt>
        <dd class="colGray">--</dd>
      </dl>
    </div>

    <div class="box_line">
      <dl class="dl_row type02">
        <dt>원본</dt>
        <dd class="colGray">200장</dd>
      </dl>
      <dl class="dl_row type02">
        <dt>정밀보정본</dt>
        <dd class="colGray">20장</dd>
      </dl>
    </div>

    <div class="box_line">
      <div class="order_list">
        <dl class="dl_row_full">
          <dt>기본촬영금</dt>
          <dd>50,000원</dd>
        </dl>
        <dl class="dl_row_full">
          <dt>인원추가 <span class="black_point">8명</span></dt>
          <dd>50,000원</dd>
        </dl>
        <dl class="dl_row_full">
          <dt>시간추가 <span class="black_point">60분</span></dt>
          <dd>50,000원</dd>
        </dl>
      </div>
      <dl class="dl_row_full mb0">
        <dt>총 판매금액</dt>
        <dd class="last_price">150,000원</dd>
      </dl>
    </div>

    <div class="box_line">
      <div class="order_list">
        <dl class="dl_row_full">
          <dt>결제 방법</dt>
          <dd>신용카드</dd>
        </dl>
        <dl class="dl_row_full">
          <dt>결제수수료</dt>
          <dd>-1,500원</dd>
        </dl>
        <dl class="dl_row_full">
          <dt>중개수수료</dt>
          <dd>-15,000원</dd>
        </dl>
      </div>
      <dl class="dl_row_full mb0">
        <dt>정산 예정금액</dt>
        <dd class="last_price">133,500원</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import BackHeader from "@C/common/BackHeader.vue";
import { whiteBg } from "@/mixins/whiteBg.js";

export default {
  components: {
    BackHeader,
  },
  mixins: [whiteBg],
};
</script>

<style></style>
