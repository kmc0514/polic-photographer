<template>
  <div>
    <header id="header" class="shadow_ber">
      <div class="close" @click="$router.back()">
        <a href="#" title="닫기"
          ><img src="@/assets/images/cloes.png" alt="닫기"
        /></a>
      </div>
    </header>
    <div id="wrap" class="wrap_type_normal">
      <div class="photo_grapher_view_info">
        <div
          class="profile_img"
          style="background-image:url('@/assets/images/sample_people01.png')"
        >
          <a href="#" alt="사진 상세보기">프로필 사진</a>
        </div>
        <dl>
          <dt>라네스냅<span class="badge_pro">PRO</span></dt>
          <dd>임보라 작가</dd>
          <dd>평점 <b>4.9</b><i></i>포트폴리오 <b>239</b></dd>
        </dl>
      </div>
      <div class="detail_tab photo_grapher_ver">
        <ul>
          <li class="on"><a href="#" title="정보">정보</a></li>
          <li><a href="#" title="포트폴리오">포트폴리오</a></li>
        </ul>
      </div>
      <div id="wrap" class="wrap_type_full mb53 pt0">
        <div class="view_line_wrap">
          <div class="view_line">
            <h3>작가 소개</h3>
            <p>
              안녕하세요 포토그래퍼 임보라입니다.<br />
              무겁지 않게 따뜻하게 촬영해요.<br />
              소중한 순간을 자연스럽게 담아드리겠습니다.
            </p>
          </div>
          <div class="view_line">
            <h3>촬영 테마</h3>
            <div class="thema_tag">
              <div class="">가족사진</div>
              <div class="">커플사진</div>
              <div class="">우정사진</div>
              <div class="">주니어</div>
              <div class="">돌잔치</div>
              <div class="">가족행사</div>
            </div>
          </div>
          <div class="view_line">
            <h3>보정 느낌 미리보기</h3>
            <h4>원본&#47;정밀보정본 비교</h4>
            <!-- 이미지 비교 스크립트 출처 사이트 : https://www.jqueryscript.net/demo/Responsive-Mobile-friendly-Image-Comparison-Plugin-Images-Compare/ -->
            <div class="page-container">
              <div class="js-img-compare">
                <div style="display: none;">
                  <span class="images-compare-label">Before</span>
                  <img src="@/assets/images/sample_review04.png" alt="Before" />
                </div>
                <div>
                  <span class="images-compare-label">After</span>
                  <img src="@/assets/images/sample_review03.png" alt="After" />
                </div>
              </div>
            </div>
          </div>
          <div class="view_line">
            <h3>촬영 안내</h3>
            <p>
              촬영을 진행하면서 지속적인 소통과 함께 개인이 가지고 있는 개성을
              담아드립니다. 촬영시간은 신청하신 시간 내로 촬영하며, 촬영 상황에
              따라 조금 더 진행 할 수 있습니다.
            </p>
            <div class="pink_shadow_btn">
              <a href="#" title="링크이동">예약 가능여부 확인하기</a>
            </div>
          </div>
          <div class="view_line">
            <h3>사진 제공 유형</h3>
            <div class="unit_card">
              <h4>일반촬영<small>- 원본제공형</small></h4>
              <ul class="provision_ver">
                <li><span class="colBlack">30분</span> 기준</li>
                <li>원본 <span class="colPink">100장+</span></li>
                <li>정밀보정본 <span class="colPink">10장</span></li>
              </ul>
            </div>
            <div class="unit_card">
              <h4>행사촬영<small>- 원본제공형</small></h4>
              <ul class="provision_ver">
                <li><span class="colBlack">30분</span> 기준</li>
                <li>원본 <span class="colPink">100장+</span></li>
                <li>정밀보정본 <span class="colPink">10장</span></li>
              </ul>
            </div>
          </div>
          <div class="view_line">
            <h3>촬영 후기</h3>
            <div class="review_box pb5">
              <div class="people_info">
                <div
                  class="profile_img"
                  style="background-image:url('@/assets/images/sample_people04.png')"
                >
                  <a href="#" alt="작가 상세보기">프로필 사진</a>
                </div>
                <dl>
                  <dt><a href="#" alt="작가 상세보기">moana_D</a></dt>
                  <dd>
                    <span class="like_num"
                      ><img
                        src="@/assets/images/main_num.png"
                        alt="작가 평점"
                      />5</span
                    ><!-- 20190815 추가수정 :: i 태그 삭제-->
                    <div class="date">2019.07.18</div>
                    <!-- 20190815 추가수정 :: date 위치 변경 -->
                  </dd>
                </dl>
              </div>
              <div
                class="after_img_box"
                style="background-image:url('@/assets/images/sample_review02.png')"
              >
                <div class="page_num">1/3</div>
                <a href="#" title="자세히보기"></a>
              </div>
              <p>
                오랜만에 떠난 휴양지 ㅎㅎ 한창 놀기 바쁠때 작가님께서 열심
                찍어주셔서 놀기도 하고 인생샷도 건지고 일석이조의 여행이
                되었습니다! 정말 감사드려요^^
              </p>
            </div>
            <div class="white_shadow_btn"><a href="#">후기 모두 보기</a></div>
          </div>
          <div class="view_line">
            <h3>촬영 요금</h3>
            <div class="unit_card">
              <h4>일반촬영<small>&#40;가족,커플,우정 등&#41;</small></h4>
              <div class="shooting_price">
                <dl>
                  <dt>기본 촬영시간</dt>
                  <dd>1시간</dd>
                </dl>
                <dl>
                  <dt>
                    기본 요금<small>&#40;출장비+촬영비+보정비&#41;</small>
                  </dt>
                  <dd class="colPink">88,000원</dd>
                </dl>
                <dl>
                  <dt>인원 추가금</dt>
                  <dd>22,000원&#47;1명</dd>
                </dl>
                <dl>
                  <dt>시간 추가금</dt>
                  <dd>44,000원&#47;30분</dd>
                </dl>
              </div>
            </div>
            <div class="unit_card">
              <h4>행사촬영<small>- 원본제공형</small></h4>
              <div class="shooting_price">
                <dl>
                  <dt>기본 촬영시간</dt>
                  <dd>1시간</dd>
                </dl>
                <dl>
                  <dt>
                    기본 요금<small>&#40;출장비+촬영비+보정비&#41;</small>
                  </dt>
                  <dd class="colPink">88,000원</dd>
                </dl>
                <dl>
                  <dt>인원 추가금</dt>
                  <dd>22,000원&#47;1명</dd>
                </dl>
                <dl>
                  <dt>시간 추가금</dt>
                  <dd>44,000원&#47;30분</dd>
                </dl>
              </div>
            </div>
            <div class="pink_shadow_btn">
              <a href="#">촬영 가격 확인하기</a>
            </div>
          </div>
        </div>
        <dl class="caution_list">
          <dt>촬영 시 유의사항</dt>
          <dd>- 약속 시간 10분전에 도착해주세요.</dd>
          <dd>- 지각한 시간도 촬영시간에 포함됩니다.</dd>
          <dd>- 기본소품을 준비하셔도 좋습니다.</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
