<template>
  <div>
    <aside v-bind:class="{ expand: isShowMenu }">
      <div class="logo">
        <router-link to="/">
          <a href=""
            ><img src="../../../../public/images/ico/favicon.ico" alt="" /><span
              >SAIKOEXPRESS</span
            ></a
          ></router-link
        >
      </div>
      <ul class="side-menu">
        <li class="nav-item">
          <router-link to="/auth"
            ><a>
              <i class="fa fa-user"></i>
              <span>Thông tin tài khoản</span>
            </a></router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/auth/address"
            ><a>
              <i class="fa fa-location-arrow"></i>
              <span>Sổ địa chỉ</span>
            </a></router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/auth/wallet"
            ><a href="#">
              <i class="fa fa-credit-card"></i>
              <span>Ví tài khoản</span>
            </a></router-link
          >
        </li>

        <li class="nav-item" @click="isShowLi = !isShowLi">
          <a>
            <i class="fa fa-cog"></i>
            <span>Quản lý hàng</span>
          </a>
        </li>
        <div id="div" v-show="isShowLi" style="animation: fadeIn linear 0.5s">
          <li class="nav-item item-li">
            <router-link to="/auth/orders">
              <a href="#">
                <span>Danh sách đơn hàng</span>
              </a>
            </router-link>
          </li>

          <li class="nav-item item-li" @click="isFormOrder = true">
            <a>
              <span>Gửi hàng</span>
            </a>
          </li>
        </div>

        <li class="nav-item">
          <router-link to="/auth/contracts"
            ><a>
              <i class="fa fa-file-text-o"></i>
              <span>Hợp đồng</span>
            </a></router-link
          >
        </li>

        <li class="nav-item">
          <router-link to="/">
            <i class="fa fa-sign-out"></i>
            <span>Về trang chủ</span>
          </router-link>
        </li>

        <li class="nav-item">
          <a
            @click="changeSttMenu()"
            :class="{ menu_icon_show: isShowMenu == false }"
          >
            <i
              style="font-size: 16px"
              class="glyphicon glyphicon-chevron-left"
              v-if="isIcon"
              @click="isIcon = !isIcon"
            >
            </i>
            <i
              style="font-size: 16px"
              class="glyphicon glyphicon-chevron-right"
              @click="isIcon = !isIcon"
              v-else
            ></i>

            <span>Đóng menu</span>
          </a>
        </li>
      </ul>
      <div v-if="isFormOrder" class="popup_tracking">
        <div class="popup_tracking-container">
          <div class="popup_tracking-wrap">
            <p @click="handleClose()">X</p>
            <TrackingRegister />
          </div>
        </div>
      </div>
    </aside>
    <span
      class="menu-icon"
      @click="changeSttMenu()"
      :class="{ menu_icon_show: isShowMenu == false }"
    >
      <span
        class="glyphicon glyphicon-chevron-left"
        v-if="isIcon"
        @click="isIcon = !isIcon"
      ></span>
      <span
        class="glyphicon glyphicon-chevron-right"
        @click="isIcon = !isIcon"
        v-else
      ></span>
    </span>
  </div>
</template>

<script lang="ts">
import TrackingRegister from "@/components/tracking/TrackingRegister.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Profile-view",
  props: {
    isShowMenu: {
      default: true,
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isFormOrder: false as boolean,
      isIcon: true,
      isShowLi: false,
      isShowLi2: false,
      userInfo: {},
    };
  },
  watch: {
    isShowMenu() {
      this.isIcon = this.isShowMenu;
    },
  },
  methods: {
    changeSttMenu() {
      this.$emit("changeSttMenu");
      this.isIcon = false;
    },
    handleClose() {
      this.isFormOrder = false;
    },
  },
  components: { TrackingRegister },
});
</script>

<style scoped>
.expand .menu-icon > .fa-th-large {
  display: none;
}

#div {
  background-color: rgba(0, 0, 21, 0.2);
  border-radius: 8px;
}

#div .item-li {
  padding-left: 45px;
  margin: 5px auto;
}

.nav-item {
  padding: 10px 0px 5px 10px;
  border-radius: 8px;
  cursor: pointer;
}

.popup_tracking {
  position: fixed;
  z-index: 100;
  height: 100vh;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 22, 0.544);
  z-index: 3000;
}

.popup_tracking p {
  float: right;
  color: #fca901;
  padding: 10px;
  cursor: pointer;
}

.popup_tracking-container {
  max-width: 1200px;
  margin: 70px auto;
  background: #fff;
}

.popup_tracking-wrap {
  border: 2px solid #fca901;
  max-height: 80vh;
  overflow-y: auto;
  padding: 30px;
}
</style>
