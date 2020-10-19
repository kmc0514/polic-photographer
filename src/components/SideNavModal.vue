<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-close" @click="$emit('close')"></div>
      <div id="menu">
        <div class="menu_profile_box">
          <div class="img_box">작가프로필</div>
          <dl>
            <dt>아르떼스튜디오</dt>
            <dd>판매중</dd>
          </dl>
        </div>

        <ul class="menu_list">
          <li>
            <router-link to="/" @click.native="$emit('close')">
              <img src="../images/menu_ico01_on.png" alt="홈" class="on" /><img
                src="../images/menu_ico01_off.png"
                alt="홈"
                class="off"
              />홈
            </router-link>
          </li>
          <li>
            <router-link to="/trade/progress" @click.native="$emit('close')">
              <img
                src="../images/menu_ico02_on.png"
                alt="촬영 관리"
                class="on"
              />
              <img
                src="../images/menu_ico02_off.png"
                alt="촬영 관리"
                class="off"
              />촬영 관리
            </router-link>
          </li>
          <li>
            <router-link to="/review" @click.native="$emit('close')">
              <img
                src="../images/menu_ico03_on.png"
                alt="리뷰 관리"
                class="on"
              /><img
                src="../images/menu_ico03_off.png"
                alt="리뷰 관리"
                class="off"
              />리뷰 관리
            </router-link>
          </li>
          <li>
            <router-link to="/income" @click.native="$emit('close')">
              <img
                src="../images/menu_ico04_on.png"
                alt="정산 관리"
                class="on"
              /><img
                src="../images/menu_ico04_off.png"
                alt="정산 관리"
                class="off"
              />정산 관리
            </router-link>
          </li>
          <li>
            <router-link to="/config" @click.native="$emit('close')">
              <img
                src="../images/menu_ico05_on.png"
                alt="설정"
                class="on"
              /><img
                src="../images/menu_ico05_off.png"
                alt="설정"
                class="off"
              />설정
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
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

.modal-close {
  width: 32%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
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
</style>
