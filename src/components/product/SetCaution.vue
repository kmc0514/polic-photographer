<template>
  <register-slot>
    <template slot="title">유의사항 작성하기</template>
    <template slot="subtitle"
      >예약 및 촬영 진행 시 유의사항을 안내하세요.</template
    >
    <template slot="contents">
      <textarea
        class="bottom_line"
        placeholder="내용을 입력하세요."
        onkeydown="resize(this)"
        onkeyup="resize(this)"
      ></textarea>
      <p class="text_num">0&#47;30</p>
      <button type="button" class="button_style01 fr mt5 mb25">확인</button>
      <ul class="write_list">
        <li>
          <i>약속 시간에 늦지 않게 도착해주세요.</i
          ><button type="button" class="list_del">
            <img src="@/assets/images/list_del.png" />
          </button>
        </li>
        <li>
          <i>지각한 시간도 촬영시간에 포함됩니다.</i
          ><button type="button" class="list_del">
            <img src="@/assets/images/list_del.png" />
          </button>
        </li>
        <li>
          <i>상호 간 예의를 지켜주세요.</i
          ><button type="button" class="list_del">
            <img src="@/assets/images/list_del.png" />
          </button>
        </li>
      </ul>
    </template>
  </register-slot>
</template>

<script>
import RegisterSlot from "./RegisterSlot.vue";

export default {
  components: {
    RegisterSlot,
  },
  created() {
    this.$emit("sentBtnData", "완료하기", "/main/product");
  },
};
</script>

<style></style>
