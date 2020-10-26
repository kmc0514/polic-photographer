<template>
  <div>
    <div id="wrap" class="wrap_type_normal">
      <div class="box pb10">
        <h3 class="mb15">계좌정보</h3>
        <div class="square_box">
          <dl class="dl_row">
            <dt>예금주</dt>
            <dd class="colGray">홍길동</dd>
          </dl>
          <dl class="dl_row">
            <dt>은행</dt>
            <dd class="colGray">카카오뱅크</dd>
          </dl>
          <dl class="dl_row">
            <dt>계좌번호</dt>
            <dd class="colGray">123-4568899-126</dd>
          </dl>
        </div>
      </div>

      <div class="box pb10">
        <h3 class="mb15">출금 신청하기</h3>
        <div class="square_box">
          <dl class="dl_row_full">
            <dt>정산가능액</dt>
            <dd class="colGray">258,000원</dd>
          </dl>
          <dl class="dl_row_full">
            <dt>출금 예정 금액</dt>
            <dd class="colGray">58,000원</dd>
          </dl>
          <dl class="dl_row_full">
            <dt>출금 신청가능 금액</dt>
            <dd class="weight800">258,000원</dd>
          </dl>
          <div class="price_box_full" style="border: 1px solid #FF635F">
            <!--금액 많을 시 border 스타일 추가 -->
            <input type="text" placeholder="0" />
            <p>원</p>
          </div>
          <p class="small_alarm_txt mt5 ">금액이 너무 많습니다.</p>
          <button type="button" class="round_btn_pink fr">출금신청</button>
        </div>
        <p class="small_txt02 colGray mt10">
          출금완료는 출금신청일로부터 최대 7영업일이 소요됩니다.
        </p>
      </div>

      <div class="box pb10">
        <h3 class="mb15">예약확정</h3>
        <div class="square_box">
          <dl class="dl_row_full">
            <dt>촬영 종료 <span class="colPink ml5">12</span>건</dt>
            <dd class="colGray">258,000원</dd>
          </dl>
          <dl class="dl_row_full">
            <dt>촬영 종료 <span class="colPink ml5">12</span>건</dt>
            <dd class="colGray">258,000원</dd>
          </dl>
          <dl class="dl_row_full mb0">
            <dt>촬영 종료 <span class="colPink ml5">12</span>건</dt>
            <dd class="colGray">258,000원</dd>
          </dl>
        </div>
      </div>

      <div class="box">
        <h3 class="mb15">거래완료</h3>

        <div class="calendar_input_wrap">
          <div class="calendar_box">
            <input type="text" value="2020.06.15" />
            <button type="button">
              <img src="@/assets/images/ico_calendar.png" />
            </button>
          </div>
          <p class="calendar_line">~</p>
          <div class="calendar_box">
            <input type="text" value="2020.06.15" />
            <button type="button">
              <img src="@/assets/images/ico_calendar.png" />
            </button>
          </div>
        </div>

        <div class="square_box">
          <div class="order_list mb10">
            <dl class="dl_row_full">
              <dt>거래완료 금액</dt>
              <dd>100,258,000원</dd>
            </dl>
            <dl class="dl_row_full mb10">
              <dt class="colGray">거래취소 금액</dt>
              <dd class="colGray">100,258,000원</dd>
            </dl>
          </div>
          <dl class="dl_row_full mb0">
            <dt>매출액</dt>
            <dd class="weight800">258,000원</dd>
          </dl>
        </div>
      </div>

      <!-- <ul class="tabs">
        <li class="tab-link current" data-tab="tab-1">판매내역</li>
        <li class="tab-link" data-tab="tab-2">출금내역</li>
      </ul>

      <div id="tab-1" class="tab-content current">
        <div class="table_scroll_wrap">
          <div class="tb_wrap">
            <div class="tb_box">
              <table class="tb">
                <caption>
                  판매내역 목록
                </caption>
                <tr class="fixed_top">
                  <th class="cell1" scope="col">상태</th>
                  <th class="cell2" scope="col">고객명</th>
                  <th class="cell3" scope="col">종류</th>
                  <th class="cell4" scope="col">시간</th>
                  <th class="cell5" scope="col">인원</th>
                  <th class="cell6" scope="col">제공유형</th>
                  <th class="cell7" scope="col">기본</th>
                  <th class="cell8" scope="col">보정</th>
                  <th class="cell9" scope="col">촬영 일자</th>
                  <th class="cell10" scope="col">장소</th>
                  <th class="cell11" scope="col">판매금액</th>
                  <th class="cell12" scope="col">결제수단</th>
                  <th class="cell13" scope="col">중개수수료</th>
                  <th class="cell14" scope="col">결제수수료</th>
                  <th class="cell15" scope="col">정산예정금</th>
                </tr>
                <tr>
                  <td class="cell1" scope="row">거래 완료</td>
                  <td class="cell2">김명철</td>
                  <td class="cell3">가족</td>
                  <td class="cell4">1</td>
                  <td class="cell5">4</td>
                  <td class="cell6">색감보정</td>
                  <td class="cell7">50</td>
                  <td class="cell8">10</td>
                  <td class="cell9">2020-06-16</td>
                  <td class="cell10">
                    경기도 의정부시 녹양로 123번길 1234, 56789
                  </td>
                  <td class="cell11">150,000</td>
                  <td class="cell12">신용카드</td>
                  <td class="cell13">-15,000</td>
                  <td class="cell14">-1,500</td>
                  <td class="cell15">133,500</td>
                </tr>
                <tr>
                  <td class="cell1" scope="row">거래 완료</td>
                  <td class="cell2">김명철</td>
                  <td class="cell3">가족</td>
                  <td class="cell4">1</td>
                  <td class="cell5">4</td>
                  <td class="cell6">색감보정</td>
                  <td class="cell7">50</td>
                  <td class="cell8">10</td>
                  <td class="cell9">2020-06-16</td>
                  <td class="cell10">
                    경기도 의정부시 녹양로 123번길 1234, 56789
                  </td>
                  <td class="cell11">150,000</td>
                  <td class="cell12">신용카드</td>
                  <td class="cell13">-15,000</td>
                  <td class="cell14">-1,500</td>
                  <td class="cell15">133,500</td>
                </tr>
                <tr>
                  <td class="cell1" scope="row">거래 완료</td>
                  <td class="cell2">김명철</td>
                  <td class="cell3">가족</td>
                  <td class="cell4">1</td>
                  <td class="cell5">4</td>
                  <td class="cell6">색감보정</td>
                  <td class="cell7">50</td>
                  <td class="cell8">10</td>
                  <td class="cell9">2020-06-16</td>
                  <td class="cell10">
                    경기도 의정부시 녹양로 123번길 1234, 56789
                  </td>
                  <td class="cell11">150,000</td>
                  <td class="cell12">신용카드</td>
                  <td class="cell13">-15,000</td>
                  <td class="cell14">-1,500</td>
                  <td class="cell15">133,500</td>
                </tr>
                <tr>
                  <td class="cell1" scope="row">거래 완료</td>
                  <td class="cell2">김명철</td>
                  <td class="cell3">가족</td>
                  <td class="cell4">1</td>
                  <td class="cell5">4</td>
                  <td class="cell6">색감보정</td>
                  <td class="cell7">50</td>
                  <td class="cell8">10</td>
                  <td class="cell9">2020-06-16</td>
                  <td class="cell10">
                    경기도 의정부시 녹양로 123번길 1234, 56789
                  </td>
                  <td class="cell11">150,000</td>
                  <td class="cell12">신용카드</td>
                  <td class="cell13">-15,000</td>
                  <td class="cell14">-1,500</td>
                  <td class="cell15">133,500</td>
                </tr>
                <tr>
                  <td class="cell1" scope="row">거래 완료</td>
                  <td class="cell2">김명철</td>
                  <td class="cell3">가족</td>
                  <td class="cell4">1</td>
                  <td class="cell5">4</td>
                  <td class="cell6">색감보정</td>
                  <td class="cell7">50</td>
                  <td class="cell8">10</td>
                  <td class="cell9">2020-06-16</td>
                  <td class="cell10">
                    경기도 의정부시 녹양로 123번길 1234, 56789
                  </td>
                  <td class="cell11">150,000</td>
                  <td class="cell12">신용카드</td>
                  <td class="cell13">-15,000</td>
                  <td class="cell14">-1,500</td>
                  <td class="cell15">133,500</td>
                </tr>
                <tr>
                  <td class="cell1" scope="row">거래 완료</td>
                  <td class="cell2">김명철</td>
                  <td class="cell3">가족</td>
                  <td class="cell4">1</td>
                  <td class="cell5">4</td>
                  <td class="cell6">색감보정</td>
                  <td class="cell7">50</td>
                  <td class="cell8">10</td>
                  <td class="cell9">2020-06-16</td>
                  <td class="cell10">
                    경기도 의정부시 녹양로 123번길 1234, 56789
                  </td>
                  <td class="cell11">150,000</td>
                  <td class="cell12">신용카드</td>
                  <td class="cell13">-15,000</td>
                  <td class="cell14">-1,500</td>
                  <td class="cell15">133,500</td>
                </tr>
                <tr>
                  <td class="cell1" scope="row">거래 완료</td>
                  <td class="cell2">김명철</td>
                  <td class="cell3">가족</td>
                  <td class="cell4">1</td>
                  <td class="cell5">4</td>
                  <td class="cell6">색감보정</td>
                  <td class="cell7">50</td>
                  <td class="cell8">10</td>
                  <td class="cell9">2020-06-16</td>
                  <td class="cell10">
                    경기도 의정부시 녹양로 123번길 1234, 56789
                  </td>
                  <td class="cell11">150,000</td>
                  <td class="cell12">신용카드</td>
                  <td class="cell13">-15,000</td>
                  <td class="cell14">-1,500</td>
                  <td class="cell15">133,500</td>
                </tr>
                <tr>
                  <td class="cell1" scope="row">거래 완료</td>
                  <td class="cell2">김명철</td>
                  <td class="cell3">가족</td>
                  <td class="cell4">1</td>
                  <td class="cell5">4</td>
                  <td class="cell6">색감보정</td>
                  <td class="cell7">50</td>
                  <td class="cell8">10</td>
                  <td class="cell9">2020-06-16</td>
                  <td class="cell10">
                    경기도 의정부시 녹양로 123번길 1234, 56789
                  </td>
                  <td class="cell11">150,000</td>
                  <td class="cell12">신용카드</td>
                  <td class="cell13">-15,000</td>
                  <td class="cell14">-1,500</td>
                  <td class="cell15">133,500</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div id="tab-2" class="tab-content">
        <div class="table_scroll_wrap">
          <div class="tb_wrap type02">
            <div class="tb_box">
              <table class="tb">
                <caption>
                  출금내역 목록
                </caption>
                <tr class="fixed_top">
                  <th class="cell1" scope="col">일자</th>
                  <th class="cell2" scope="col">구분</th>
                  <th class="cell3" scope="col">내용</th>
                  <th class="cell4" scope="col">금액</th>
                  <th class="cell5" scope="col">출금 신청 가능금액</th>
                  <th class="cell6" scope="col">출금 예정 금액</th>
                </tr>
                <tr>
                  <td class="cell1" scope="row">2020-12-12</td>
                  <td class="cell2">정산</td>
                  <td class="cell3 text_left">거래완료</td>
                  <td class="cell4">133,500</td>
                  <td class="cell5">1,133,500</td>
                  <td class="cell6">1,000,000</td>
                </tr>
                <tr>
                  <td class="cell1" scope="row">2020-12-12</td>
                  <td class="cell2">출금</td>
                  <td class="cell3 text_left">출금완료(2020-12-04 신청)</td>
                  <td class="cell4">133,500</td>
                  <td class="cell5">1,133,500</td>
                  <td class="cell6">1,000,000</td>
                </tr>
                <tr>
                  <td class="cell1" scope="row">2020-12-12</td>
                  <td class="cell2">정산</td>
                  <td class="cell3 text_left">거래완료</td>
                  <td class="cell4">133,500</td>
                  <td class="cell5">1,133,500</td>
                  <td class="cell6">1,000,000</td>
                </tr>
                <tr>
                  <td class="cell1" scope="row">2020-12-12</td>
                  <td class="cell2">정산</td>
                  <td class="cell3 text_left">거래완료</td>
                  <td class="cell4">133,500</td>
                  <td class="cell5">1,133,500</td>
                  <td class="cell6">1,000,000</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { whiteBg } from "@/mixins/whiteBg";

export default {
  mixins: [whiteBg],
};
</script>

<style></style>
