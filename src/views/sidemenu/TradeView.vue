<template>
  <div>
    <tab-slot>
      <li><a href="#" title="링크 이동">촬영종료</a></li>
      <li class="on"><a href="#" title="링크 이동">거래완료</a></li>
    </tab-slot>
    <div id="wrap" class="wrap_type_tab">
      <div class="space_wrap">
        <h3>전달하실 사진이 <span class="colPink">3건</span> 남았어요.</h3>
        <div class="deal_list">
          <ul>
            <li>
              <a href="#" title="자세히 보기">
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
                      >경기도 의정부시경기도 의정부시경기도 의정부시경기도
                      의정부시경기도 의정부시경기도 의정부시</i
                    >
                    <i>18:00</i>
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" title="자세히 보기">
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
                    <i>경기도 의정부시</i>
                    <i>18:00</i>
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#" title="자세히 보기">
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
                    <i>경기도 의정부시</i>
                    <i>18:00</i>
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabSlot from "@/components/TabSlot.vue";

export default {
  components: {
    TabSlot,
  },
  mounted() {},
};
</script>

<style scoped></style>
