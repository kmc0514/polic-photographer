<template>
  <div class="login_wrap">
    <h1>
      안녕하세요 작가님,<br />
      촬영을 시작해볼까요?
    </h1>
    <form @submit.prevent="loginTry">
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
        <p>{{ errMsg ? "이메일 또는 비밀번호가 일치하지 않습니다." : "" }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import { whiteBg } from "@/mixins/whiteBg.js";
import { bus } from "@/utils/bus.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      errMsg: false,
    };
  },
  methods: {
    async loadAuthorDetail(authorID) {
      let headers = {
        tos: "author_profile",
      };

      let params = {
        photographer_id: authorID,
      };

      await this.$store.dispatch("FETCH_AUTHOR_DETAIL", {
        headers,
        params,
      });

      console.log("loaded author profile:", authorID);
    },
    async LoadRequestList() {
      let headers = {
        tos: "customer_request_list",
      };

      let params = {};

      await this.$store.dispatch("FETCH_REQUEST_LIST", { headers, params });
      console.log("loaded request list: SUCCESS");
    },
    loginTry() {
      bus.$emit("spinner-on");
      this.$store.state.logIn = true;
      this.loadAuthorDetail(this.$store.state.id);
      this.LoadRequestList();
      setTimeout(() => {
        console.log("login: SUCCESS");
        this.$router.push("main/request");
        bus.$emit("spinner-off");
      }, 1000);
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
  width: 80%;
  background: none;
}

.login_wrap h1 {
  width: 100%;
  font-weight: 600;
  font-size: 24px;
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

.login_btn_wrap p {
  text-align: center;
  color: #ff635f;
  margin-top: 12px;
}

.button_login {
  width: 100%;
  background-color: #ff635f;
  color: white;
  border: none;
  border-radius: 4px;
  height: 48px;
}
</style>
