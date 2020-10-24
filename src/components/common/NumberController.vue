<template>
  <div class="pm_numbox">
    <p class="bt_down">-</p>
    <!--활성화 가능 시 active 클래스 추가 -->
    <div class="input_control">
      <input type="text" name="goods_num" value="30" id="" class="goods_num" />
      <span>
        <slot>
          <!-- 숫자 단위를 입력하세요. -->
        </slot>
      </span>
    </div>
    <p class="bt_up active">+</p>
    <!--활성화 가능 시 active 클래스 추가 -->
  </div>
</template>

<script>
export default {};
</script>

<style></style>
