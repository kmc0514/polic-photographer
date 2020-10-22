<template>
  <div class="login_box">
    <div class="login_wrap">
      <div class="img_wrap">
        <img src="@/images/logo_horizon.png" />
      </div>

      <h1>
        안녕하세요 작가님,<br />
        촬영을 시작해볼까요?
      </h1>
      <form @submit.prevent="loginCheck">
        <div class="login_input_wrap">
          <label for="e-mail">이메일</label>
          <input
            id="e-mail"
            type="email"
            placeholder="abcd@email.com"
            v-model="email"
          />
        </div>
        <div class="login_input_wrap">
          <label for="password">비밀번호</label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요."
            v-model="password"
          />
        </div>
        <div class="login_btn_wrap">
          <button class="button_login" type="submit">
            로그인
          </button>
          <p>{{ errMsg }}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { whiteBg } from "../mixins/whiteBg.js";

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
      this.$store.dispatch("FETCH_REQUEST_LIST");
      this.$router.push("request");
    },
  },
  mixins: [whiteBg],
};
</script>

<style scoped>
.login_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
}

.login_wrap .img_wrap {
  width: 100%;
}

.login_wrap img {
  height: 24px;
  width: auto;
  padding: 16px 0;
}

.login_wrap h1 {
  width: 100%;
  font-weight: 600;
  font-size: 21px;
  margin: 32px 0 64px 0;
  text-align: center;
}

.login_wrap form {
  width: 100%;
}

.login_input_wrap {
  margin-bottom: 16px;
}

.login_input_wrap label {
  color: #ff635f;
  margin-left: 8px;
}

.login_input_wrap input {
  border: 0;
  border-bottom: 2px solid #ff635f;
  padding: 12px;
}

.login_input_wrap input:focus {
  outline: none;
}

.login_btn_box p {
  color: #ff635f;
}

.button_login {
  width: 100%;
  background-color: #ff635f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px;
}
</style>
