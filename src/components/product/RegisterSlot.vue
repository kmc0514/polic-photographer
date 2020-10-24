<template>
  <div id="wrap" class="wrap_type_normal footer_btn_ver">
    <div class="box mt10">
      <div class="info_box">
        <h2>
          <slot name="title">
            <!-- 제목을 입력하세요 -->
          </slot>
        </h2>
        <p>
          <slot name="subtitle">
            <!-- 설명을 입력하세요. -->
          </slot>
        </p>
        <slot name="help"></slot>
      </div>
      <slot name="contents">
        <!-- 콘텐츠를 입력하세요. -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
