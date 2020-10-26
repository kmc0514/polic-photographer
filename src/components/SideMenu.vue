<template>
  <div class="modal-mask" @click="$emit('close')">
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
          <router-link to="/main/request" @click.native="$emit('close')">
            <img
              src="@/assets/images/menu_ico01_on.png"
              alt="홈"
              class="on"
            /><img
              src="@/assets/images/menu_ico01_off.png"
              alt="홈"
              class="off"
            />홈
          </router-link>
        </li>
        <li>
          <router-link
            to="/admin/trade/progress"
            @click.native="$emit('close')"
          >
            <img
              src="@/assets/images/menu_ico02_on.png"
              alt="촬영 관리"
              class="on"
            />
            <img
              src="@/assets/images/menu_ico02_off.png"
              alt="촬영 관리"
              class="off"
            />촬영 관리
          </router-link>
        </li>
        <li>
          <router-link to="/admin/review" @click.native="$emit('close')">
            <img
              src="@/assets/images/menu_ico03_on.png"
              alt="리뷰 관리"
              class="on"
            /><img
              src="@/assets/images/menu_ico03_off.png"
              alt="리뷰 관리"
              class="off"
            />후기 관리
          </router-link>
        </li>
        <li>
          <router-link to="/admin/sales" @click.native="$emit('close')">
            <img
              src="@/assets/images/menu_ico04_on.png"
              alt="정산 관리"
              class="on"
            /><img
              src="@/assets/images/menu_ico04_off.png"
              alt="정산 관리"
              class="off"
            />정산 관리
          </router-link>
        </li>
        <li>
          <router-link to="/admin/setting" @click.native="$emit('close')">
            <img
              src="@/assets/images/menu_ico05_on.png"
              alt="설정"
              class="on"
            /><img
              src="@/assets/images/menu_ico05_off.png"
              alt="설정"
              class="off"
            />설정
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
