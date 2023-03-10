<template>
  <section id="contact">
    <div class="header_">
      <div class="header_wrap">
        <div class="wrap_search">
          <div class="row">
            <div class="col-lg-6">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Theo mã tracking..."
                  v-model="tracking_code"
                />
                <span class="input-group-btn">
                  <button class="btn btn-default" @click="handleClick()">
                    Tìm
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="wrap_icon">
          <Transition name="bounce">
            <div
              class="iconz"
              v-if="getNightMode"
              @click="handleChangeDarkMode()"
            >
              <i class="fa fa-sun-o" aria-hidden="true"></i>
            </div>

            <div class="iconz" v-else @click="handleChangeDarkMode()">
              <i class="fa fa-moon-o" aria-hidden="true"></i>
            </div>
          </Transition>
          <div class="iconz icon_notification">
            <i class="glyphicon glyphicon-bell" @click="isShow = !isShow"></i>
            <div class="number_noti">
              <span>{{ getNumNoti }}</span>
            </div>
            <Notification
              :isShow="isShow"
              v-show="isShow"
              @update:isShow="isShow = $event"
            />
          </div>

          <div class="iconz" @click="logout()">
            <i class="glyphicon glyphicon-log-out"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="contact container">
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon">
            <div class="avt">
              <img :src="urlAvt" />
            </div>
          </div>
          <div class="contact-info">
            <h1>Cá nhân</h1>
            <h2>
              Tên:
              <span>{{ userInfo.name ? userInfo.name : "Khách hàng" }}</span>
            </h2>

            <h2>
              Email:
              <span>{{
                userInfo.email ? userInfo.email : "Chưa có Email"
              }}</span>
            </h2>
            <h2>
              Số điện thoại:
              <span>{{ userInfo.tel ? userInfo.tel : "Chưa có SĐT" }}</span>
            </h2>
            <h2>
              Vai trò:
              <span class="label label-success"> {{ userInfo.role.name }}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>

    <div class="popup_tracking" v-show="isShowInfoTracking">
      <div class="popup_tracking-container">
        <div class="popup_tracking-wrap">
          <p @click="handleClickClose()">X</p>
          <TrackingInfoForm
            :code="tracking_code"
            :stt="isGet"
            :isErrors="isErrors"
            :title="errors.title"
            @update:title="errors.title = $event"
            @update:isError="isErrors = $event"
          />
        </div>
      </div>
    </div>
    <TheLoading :sw="sw" />

    <AlertErrRegister
      v-if="isErrors == 'true'"
      :title="errors.title"
      @handleClose="changeSttAlert"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheLoading from "@/components/TheLoading.vue";
import _ from "lodash";
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import TrackingInfoForm from "../../tracking/TrackingInfoForm.vue";
import AlertErrRegister from "../../output/alertErrRegister.vue";
import { useAuthStore } from "@/stores/auth";
import Notification from "./Notification.vue";
import { otherStore } from "@/stores/other";
import { notificationStore } from "@/stores/notification";

export default defineComponent({
  mixins: [formatValueMinxin],

  data() {
    return {
      isShow: false as boolean,
      isShowInfoTracking: false as boolean,
      isErrors: "false",
      errors: {
        title: "" as string,
      },
      isInput: false as boolean,
      isGet: false as boolean,
      tracking_code: "" as string,

      isNightMode: false as boolean,
      sw: false as boolean,
      idz: "" as string,
    };
  },
  watch: {
    "errors.title"() {
      if (this.errors.title != "") {
        this.isErrors = "true";
        this.isShowInfoTracking = false;
      }
    },
  },

  computed: {
    urlAvt() {
      if (_.isEmpty(useAuthStore().me?.photoURL)) {
        return "https://img.icons8.com/fluency/100/000000/parse-resumes.png";
      } else {
        return String(useAuthStore().me?.photoURL);
      }
    },

    userInfo() {
      return useAuthStore().user_info;
    },

    getNightMode() {
      return otherStore().get_dark_mode;
    },

    getNumNoti() {
      return notificationStore().get_num;
    },
  },

  methods: {
    changeSttAlert() {
      this.isErrors = "";
    },

    logout() {
      useAuthStore()
        .logout()
        .then(() => {
          this.$router.push({ path: "/login" });
        });
    },

    handleChangeDarkMode() {
      otherStore().handleChangeDarkMode();
    },

    handleClick() {
      if (this.tracking_code != "") {
        this.isGet = true;
        this.isShowInfoTracking = true;
        setTimeout(() => {
          this.reset();
        }, 1000);
      }
    },
    handleClickClose() {
      this.isShowInfoTracking = false;
    },

    reset() {
      this.isGet = false;
    },

  },
  components: { TheLoading, TrackingInfoForm, AlertErrRegister, Notification },
});
</script>

<style scoped>
.avt {
  height: 130px;
  width: 130px;
  background-image: linear-gradient(to right bottom, #fca901, #ff6bcb);
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
}
.icon img {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.fa-sun-o {
  font-size: 20px;
  color: #fff;
}

.fa-moon-o {
  font-size: 23px;
  color: #fff;
}

.fa-home {
  font-size: 23px;
  color: #fff;
}
#contact .container {
  padding-left: 0px;
}

#contact .contact {
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}

#contact .contact-items {
  width: 100%;
  padding-top: 50px;
}

#contact .contact-item {
  padding: 20px;
  border-radius: 10px;
  margin: 30px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  box-shadow: 0px 0px 18px 0 #0000002c;
  transition: 0.3s ease box-shadow;
  background: #fff;
  flex-wrap: wrap;
}

#contact .contact-item:hover {
  box-shadow: 0px 0px 5px 0 #0000002c;
}

#contact .icon {
  margin-bottom: 10px;
  width: 200px;
}

#contact .contact-info h1 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 5px;
}

#contact .contact-info h2 {
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 500;
}

.wrap_search {
  width: 70%;
}

.row {
  margin: 10px 0px 0px 10px;
}
.input-group-btn button {
  background-color: #ffa502;
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
