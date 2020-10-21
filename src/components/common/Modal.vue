<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="popup_wrap">
        <div class="popup_box">
          <div class="popup_contents">
            <div class="pop_ico">
              <img :src="require(`@/images/pop_ico_${iconType}.png`)" />
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
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      btnType: String,
      iconType: String,
    };
  },
  props: {
    /* 
        모달 팝업 스타일
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

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
.modal-default-button {
  float: right;
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
