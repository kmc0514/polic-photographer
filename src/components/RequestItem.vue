<template>
  <div class="request_box">
    <template>
      <div class="left_ico" :class="{ gray_bg: !paid }">
        <img src="../images/request.png" class="arrow_ico" />
      </div>
    </template>
    <div class="view_content">
      <div class="title">
        <h3>
          {{ paid ? "결제가 완료되었습니다." : "촬영 요청이 도착했습니다." }}
        </h3>
        <p>{{ req.created_time }}</p>
      </div>
      <div class="info">
        <dl>
          <dt>상세 정보</dt>
          <dd>
            {{ req.tag_name }} / {{ req.period }}분 / {{ req.headcount }}명
          </dd>
        </dl>
        <dl>
          <dt>촬영 장소</dt>
          <dd>{{ req.address }}</dd>
        </dl>
        <dl>
          <dt>세부 장소</dt>
          <dd>
            {{ req.place === "장소 추천받기" ? "상담 후 결정" : req.place }}
          </dd>
        </dl>
        <dl>
          <dt>촬영 날짜</dt>
          <dd>
            {{ req.date === "시간 추천받기" ? "상담 후 결정 " : req.date }}
          </dd>
        </dl>
        <dl>
          <dt>촬영 시간</dt>
          <dd>{{ req.begin_time }}시 ~ {{ req.end_time }}시 사이</dd>
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
          <a href="#" class="btn_style btn_type03" @click="onOffModal">
            촬영 제안
          </a>
        </template>
      </div>
    </div>
    <Modal
      v-if="showModal"
      :modalType="modalTypeData"
      @close="showModal = false"
    >
      <h4 slot="h4">촬영제안 완료</h4>
      <p slot="p">결제가 확인되면 예약을 확정 할 수 있습니다.</p>
      <div slot="etc" class="normal_dl">
        <dl>
          <dt>촬영예정일</dt>
          <dd>
            {{ req.date === "시간 추천받기" ? "상담 후 결정 " : req.date }}
          </dd>
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
      paid: false,
    };
  },
  props: ["req"],
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

<style scoped></style>
