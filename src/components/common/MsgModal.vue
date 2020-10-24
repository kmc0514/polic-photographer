<template>
  <modal-mask>
    <div slot="message" class="popup_box">
      <div class="popup_contents">
        <div class="pop_ico">
          <img :src="require(`@/assets/images/pop_ico_${iconType}.png`)" />
        </div>
        <slot name="h4">
          <!-- 팝업 타이틀 입력 -->
        </slot>
        <slot name="p">
          <!-- 팝업 본문 입력 -->
        </slot>
        <slot name="etc">
          <!-- 기타 -->
        </slot>
      </div>
      <div class="popup_btn_wrap" :class="btnType" @click="closeModal">
        <slot name="button"></slot>
        <slot name="button2"></slot>
      </div>
    </div>
  </modal-mask>
</template>

<script>
import ModalMask from "@C/common/ModalMask";

export default {
  data() {
    return {
      btnType: String,
      iconType: String,
    };
  },
  props: {
    /* 
        촬영요청 모달 팝업 스타일
        # default - 헤드 아이콘 없음, 버튼 1개(class : type01)
        # check - 헤드 아이콘 없음, 버튼 2개(class: type02)
        # fail - 헤드 아이콘 X 모양, 버튼 1개(class: type01)
        # success - 헤드 아이콘 V 모양, 버튼 1개(class: type01)
    */
    modalType: {
      type: String, // default, check, fail, success
      required: true,
    },
  },
  components: {
    ModalMask,
  },
  methods: {
    getModal() {
      switch (this.modalType) {
        case "check":
          this.btnType = "type02";
          break;
        case "fail":
          this.btnType = "type01";
          this.iconType = "cancel";
          break;
        case "success":
          this.btnType = "type01";
          this.iconType = "complete";
          break;
        default:
          this.btnType = "type01";
      }
    },
    closeModal() {
      console.log("close");
      this.$emit("close");
    },
  },
  created() {
    this.getModal();
  },
};
</script>

<style></style>
