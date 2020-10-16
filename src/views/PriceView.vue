<template>
  <div>
    <div id="wrap" class="wrap_type_normal">
      <div class="box mt10">
        <div class="info_box mb10">
          <h2>촬영 요금을 설정하기</h2>
          <p>촬영 테마별로 알맞은 요금을 책정하세요.</p>
          <p>
            <a href="#" class="question_txt"
              >폴릭 요금 체계 알아보기
              <img src="../images/question_mark.png" alt="알아보기"
            /></a>
          </p>
        </div>
      </div>
    </div>
    <div class="wrap_type_content_full footer_btn_ver pt0">
      <!-- 하단 버튼 추가시 footer_btn_ver 추가 -->
      <div class="board_box">
        <ul>
          <li class="article">
            <p class="q_txt">
              <a href="#a1" class="trigger"
                ><span class="title">일반</span><span class="review_btn"></span>
              </a>
            </p>
            <div class="a_txt">
              <div class="acc_box">
                <h4>기본 촬영 요금</h4>
                <div class="title_input_box">
                  <div class="pm_numbox">
                    <p class="bt_down">-</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                    <div class="input_control">
                      <input
                        type="text"
                        name="goods_num"
                        value="30"
                        id=""
                        class="goods_num"
                      />
                      <span>분</span>
                    </div>
                    <p class="bt_up active">+</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                  </div>
                  <div class="price_box">
                    <input type="text" placeholder="0" />
                    <p>원</p>
                  </div>
                </div>
              </div>
              <div class="acc_box">
                <h4>촬영 인원 요금</h4>
                <div class="title_input_box">
                  <p class="left_text">1인 당</p>
                  <div class="price_box">
                    <input type="text" placeholder="0" />
                    <p>원</p>
                  </div>
                </div>
              </div>
              <div class="acc_box">
                <h4>추가 촬영 요금</h4>
                <div class="title_input_box">
                  <div class="pm_numbox">
                    <p class="bt_down">-</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                    <div class="input_control">
                      <input
                        type="text"
                        name="goods_num"
                        value="30"
                        id=""
                        class="goods_num"
                      />
                      <span>분</span>
                    </div>
                    <p class="bt_up active">+</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                  </div>
                  <div class="price_box">
                    <input type="text" placeholder="0" />
                    <p>원</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="article">
            <p class="q_txt">
              <a href="#a1" class="trigger"
                ><span class="title">베이비&#47;주니어</span
                ><span class="review_btn"></span>
              </a>
            </p>
            <div class="a_txt">
              <div class="acc_box">
                <h4>기본 촬영 요금</h4>
                <div class="title_input_box">
                  <div class="pm_numbox">
                    <p class="bt_down">-</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                    <div class="input_control">
                      <input
                        type="text"
                        name="goods_num"
                        value="30"
                        id=""
                        class="goods_num"
                      />
                      <span>분</span>
                    </div>
                    <p class="bt_up active">+</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                  </div>
                  <div class="price_box">
                    <input type="text" placeholder="0" />
                    <p>원</p>
                  </div>
                </div>
              </div>
              <div class="acc_box">
                <h4>촬영 인원 요금</h4>
                <div class="title_input_box">
                  <p class="left_text">1인 당</p>
                  <div class="price_box">
                    <input type="text" placeholder="0" />
                    <p>원</p>
                  </div>
                </div>
              </div>
              <div class="acc_box">
                <h4>추가 촬영 요금</h4>
                <div class="title_input_box">
                  <div class="pm_numbox">
                    <p class="bt_down">-</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                    <div class="input_control">
                      <input
                        type="text"
                        name="goods_num"
                        value="30"
                        id=""
                        class="goods_num"
                      />
                      <span>분</span>
                    </div>
                    <p class="bt_up active">+</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                  </div>
                  <div class="price_box">
                    <input type="text" placeholder="0" />
                    <p>원</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="article">
            <p class="q_txt">
              <a href="#a1" class="trigger"
                ><span class="title">행사</span><span class="review_btn"></span>
              </a>
            </p>
            <div class="a_txt">
              <div class="acc_box">
                <h4>기본 촬영 요금</h4>
                <div class="title_input_box">
                  <div class="pm_numbox">
                    <p class="bt_down">-</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                    <div class="input_control">
                      <input
                        type="text"
                        name="goods_num"
                        value="30"
                        id=""
                        class="goods_num"
                      />
                      <span>분</span>
                    </div>
                    <p class="bt_up active">+</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                  </div>
                  <div class="price_box">
                    <input type="text" placeholder="0" />
                    <p>원</p>
                  </div>
                </div>
              </div>
              <div class="acc_box">
                <h4>추가 촬영 요금</h4>
                <div class="title_input_box">
                  <div class="pm_numbox">
                    <p class="bt_down">-</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                    <div class="input_control">
                      <input
                        type="text"
                        name="goods_num"
                        value="30"
                        id=""
                        class="goods_num"
                      />
                      <span>분</span>
                    </div>
                    <p class="bt_up active">+</p>
                    <!--활성화 가능 시 active 클래스 추가 -->
                  </div>
                  <div class="price_box">
                    <input type="text" placeholder="0" />
                    <p>원</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="bottom_btn_wrap mb20">
      <button type="button" class="bottom_btn_gray">다음으로</button
      ><!-- 활성화 시 bottom_btn_pink -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
