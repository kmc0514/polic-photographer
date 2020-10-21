<template>
  <div class="login_flex">
    <div class="login_wrap">
      <div>
        <h1>폴릭 포토그래퍼 시작하기</h1>
      </div>
      <form @submit.prevent="submitForm">
        <div class="input_wrap">
          <label for="e-mail">E-MAIL</label>
          <input
            id="e-mail"
            type="email"
            placeholder="이메일을 입력하세요."
            v-model="email"
          />
        </div>
        <div class="input_wrap">
          <label for="password">PASSWORD</label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요."
            v-model="password"
          />
        </div>
        <div class="login_btn_box">
          <button class="button_pink_type01" @click="loginCheck">
            로그인
          </button>
          <p>{{ errMsg }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errMsg: "",
    };
  },
  methods: {
    loginCheck() {
      this.$store.state.logIn = true;
      this.$router.push("request");
    },
  },
};
</script>

<style scoped>
.login_flex {
  min-width: 100%;
  min-height: 100vh;
  background: #fff;
  padding-top: 96px;
}

.login_wrap h1 {
  font-size: 21px;
  width: 100%;
  margin: 0px;
  font-weight: 600;
  margin-bottom: 64px;
}

.login_wrap .input_wrap {
  margin-bottom: 6px;
}

.login_btn_box {
  text-align: center;
  margin-top: 12px;
}

.button_pink_type01 {
  width: 95%;
  padding: 8px 0px;
  background-color: #ff635f;
  color: white;
}

.login_btn_box p {
  color: #ff635f;
}
</style>
