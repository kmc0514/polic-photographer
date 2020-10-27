<template>
  <div id="wrap" class="wrap_type_tab">
    <div class="main_box">
      <h3>촬영 상품 완성도<span class="percent_point">0&#37;</span></h3>
      <p>
        기본 설정만 완료해도 판매를 시작할 수 있어요.<br />지금 바로
        시작해볼까요?
      </p>
      <router-link to="/preview" class="slim_btn">촬영 상품 만들기</router-link>
    </div>
    <div class="main_box">
      <h3>기본 설정 &#40;필수&#41;</h3>
      <ul>
        <li>
          <router-link to="/register/thema"
            ><i>촬영 테마 선택하기</i><em>작성하기</em></router-link
          >
        </li>
        <li>
          <router-link to="/register/price"
            ><i>촬영 요금 설정하기</i></router-link
          >
        </li>
        <li>
          <router-link to="/register/amount"
            ><i>사진 제공량 설정하기</i></router-link
          >
        </li>
      </ul>
    </div>
    <div class="main_box">
      <h3>세부 설정 &#40;선택&#41;</h3>
      <ul>
        <li>
          <router-link to="/register/introduce"
            ><i>작가 소개하기</i></router-link
          >
        </li>
        <li>
          <router-link to="/register/compare"
            ><i>보정 느낌 전달하기</i></router-link
          >
        </li>
        <li>
          <router-link to="/register/guide"><i>촬영 안내하기</i></router-link>
        </li>
        <li>
          <router-link to="/register/caution"
            ><i>유의사항 설정하기</i></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { whiteBg } from "@/mixins/whiteBg.js";

export default {
  mixins: [whiteBg],
};
</script>

<style scoped></style>
