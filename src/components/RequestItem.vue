<template>
  <div class="request_box">
    <template>
      <div class="left_ico" :class="{ gray_bg: !paid }">
        <img src="../images/request.png" class="arrow_ico" />
      </div>
    </template>
    <div class="view_content">
      <div class="title">
        <h3>결제가 완료되었습니다.</h3>
        <p>오늘 오후 1:13</p>
      </div>
      <div class="info">
        <dl>
          <dt>상세 정보</dt>
          <dd>가족 / 2시간 / 5명</dd>
        </dl>
        <dl>
          <dt>촬영 장소</dt>
          <dd>서울시 마포구 상암동 123 하늘공원</dd>
        </dl>
        <dl>
          <dt>세부 장소</dt>
          <dd>상담 후 결정</dd>
        </dl>
        <dl>
          <dt>촬영 날짜</dt>
          <dd>2020년 5월 11일</dd>
        </dl>
        <dl>
          <dt>촬영 시간</dt>
          <dd>상담 후 결정</dd>
        </dl>
      </div>
      <div class="btn_list">
        <template v-if="paid">
          <a href="#" class="btn_style btn_type01">촬영 거절</a>
          <a href="#" class="btn_style btn_type02 size02">예약 확정하기</a>
        </template>
        <template v-else>
          <a href="#" class="btn_style btn_type01 brn">위치 보기</a>
          <a href="#" class="btn_style btn_type01 brn">촬영 거절</a>
          <a href="#" class="btn_style btn_type03" @click="onOffModal"
            >촬영 제안</a
          >
        </template>
      </div>
    </div>
    <Modal v-if="showModal" :modalType="modalTypeData">
      <h4 slot="h4">촬영제안 완료</h4>
      <p slot="p">결제가 확인되면 예약을 확정 할 수 있습니다.</p>
      <div slot="etc" class="normal_dl">
        <dl>
          <dt>촬영예정일</dt>
          <dd>2020-06-14</dd>
        </dl>
        <dl>
          <dt>예상판매금</dt>
          <dd>150,000</dd>
        </dl>
      </div>
      <a slot="button">확인</a>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/common/Modal.vue";

export default {
  data() {
    return {
      showModal: false,
      modalTypeData: String,
    };
  },
  props: ["paid"],
  methods: {
    onOffModal() {
      this.showModal = !this.showModal;
      this.modalTypeData = "success";
    },
  },
  components: {
    Modal,
  },
};
</script>

<style></style>
