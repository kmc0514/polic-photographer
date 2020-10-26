<template>
  <li>
    <router-link
      :to="{ path: '/detail', query: { trade_id: id } }"
      href="#"
      title="자세히 보기"
    >
      <span class="people_info">
        <span
          class="profile_img"
          style="background-image:url('./images/profile_img02.png')"
          >프로필 사진</span
        >
        <span class="people_text">
          <b><i>홍길동</i></b
          ><!--20190815 추가수정 :: i태그 추가 -->
          <i>가족스냅 / 8명 / 2시간</i>
          <i
            >경기도 의정부시경기도 의정부시경기도 의정부시경기도 의정부시경기도
            의정부시경기도 의정부시</i
          >
          <i>18:00</i>
        </span>
      </span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style></style>
