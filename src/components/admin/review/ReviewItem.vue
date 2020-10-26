<template>
  <div class="review_wrap">
    <div class="review_box">
      <div class="user_info">
        <span
          class="profile_img"
          style="background-image:url('./images/profile_img02.png')"
          >프로필 사진</span
        >
        <span class="people_text">
          <span class="left_contents">
            <b>가나다라마바사아자차</b>
            <star-rating :rating="2.5"></star-rating>
          </span>
          <i>2019. 08. 12</i>
        </span>
      </div>
      <div class="user_bubble">
        <div class="review_contents">
          <div class="photo_box">
            <div
              class="review_photo"
              style="background-image:url('/assets/images/sample_img01.png')"
            >
              <a href="99사진상세보기.html" title="상세보기">후기 사진</a>
            </div>
            <div
              class="review_photo"
              style="background-image:url('../../assets/images/sample_img02.png')"
            >
              <a href="99사진상세보기.html" title="상세보기">후기 사진</a>
            </div>
            <div
              class="review_photo"
              style="background-image:url('../../assets/images/sample_img03.png')"
            >
              <a href="99사진상세보기.html" title="상세보기" class="more_photo"
                ><span>&#43;3</span></a
              >
            </div>
          </div>
        </div>
        <p>
          샘플에 반해서 상담 받을 때 마다 폴릭 지정해서 견적 받았었는데 너무나
          마음에 들어요. 촬영 구도나 느낌 모두 좋았고 다음에 또 여기서
          예약하려구요!
        </p>
      </div>
      <button type="button" class="reply_btn">답글달기</button>
    </div>
    <review-reply></review-reply>
    <!--//review_box-->

    <div class="review_box">
      <div class="user_info">
        <span
          class="profile_img"
          style="background-image:url('./images/profile_img02.png')"
          >프로필 사진</span
        >
        <span class="people_text">
          <span class="left_contents">
            <b>가나다라마바사아자차</b>
            <span class="star_box">
              <span class="star star_left on"></span>
              <span class="star star_right on"></span>

              <span class="star star_left on"></span>
              <span class="star star_right on"></span>

              <span class="star star_left on"></span>
              <span class="star star_right"></span>

              <span class="star star_left"></span>
              <span class="star star_right"></span>

              <span class="star star_left"></span>
              <span class="star star_right"></span> </span
            ><!--//star_box-->
          </span>
          <i>2019. 08. 12</i>
        </span>
      </div>
      <div class="user_bubble">
        <p>
          샘플에 반해서 상담 받을 때 마다 폴릭 지정해서 견적 받았었는데 너무나
          마음에 들어요. 촬영 구도나 느낌 모두 좋았고 다음에 또 여기서
          예약하려구요!
        </p>
      </div>
      <!--//user_bubble-->
      <button type="button" class="reply_btn">답글달기</button>
    </div>
    <!--//review_box-->

    <div class="review_box">
      <div class="user_info">
        <span
          class="profile_img"
          style="background-image:url('./images/profile_img02.png')"
          >프로필 사진</span
        >
        <span class="people_text">
          <span class="left_contents">
            <b>가나다라마바사아자차</b>
            <span class="star_box">
              <span class="star star_left on"></span>
              <span class="star star_right on"></span>

              <span class="star star_left on"></span>
              <span class="star star_right on"></span>

              <span class="star star_left on"></span>
              <span class="star star_right"></span>

              <span class="star star_left"></span>
              <span class="star star_right"></span>

              <span class="star star_left"></span>
              <span class="star star_right"></span> </span
            ><!--//star_box-->
          </span>
          <i>2019. 08. 12</i>
        </span>
      </div>
      <div class="user_bubble">
        <div class="review_contents">
          <div class="photo_box">
            <div
              class="review_photo"
              style="background-image:url('./images/sample_img01.png')"
            >
              <a href="99사진상세보기.html" title="상세보기">후기 사진</a>
            </div>
            <div
              class="review_photo"
              style="background-image:url('./images/sample_img02.png')"
            >
              <a href="99사진상세보기.html" title="상세보기">후기 사진</a>
            </div>
            <div
              class="review_photo"
              style="background-image:url('./images/sample_img03.png')"
            >
              <a href="99사진상세보기.html" title="상세보기" class="more_photo"
                ><span>&#43;3</span></a
              >
            </div>
          </div>
        </div>
        <p>
          샘플에 반해서 상담 받을 때 마다 폴릭 지정해서 견적 받았었는데 너무나
          마음에 들어요. 촬영 구도나 느낌 모두 좋았고 다음에 또 여기서
          예약하려구요!
        </p>
      </div>
      <!--//user_bubble-->
      <button type="button" class="reply_btn">답글달기</button>
    </div>
    <!--//review_box-->

    <review-reply></review-reply>
  </div>
</template>

<script>
import StarRating from "@C/common/StarRating.vue";
import ReviewReply from "@C/admin/review/ReviewReply";

export default {
  components: {
    StarRating,
    ReviewReply,
  },
};
</script>

<style></style>
