<template>
  <div class="login_box">
    <div class="img_wrap">
      <img src="@/assets/images/logo_horizon.png" />
    </div>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from "@C/login/LoginForm.vue";

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.login_box {
  height: 100%;
}

.login_box .img_wrap {
  margin-left: 10%;
  margin-top: 12px;
}

.login_box img {
  height: 28px;
  width: auto;
  padding: 16px 0;
}
</style>
