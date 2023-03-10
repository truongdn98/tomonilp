<template>
  <div class="container">
    <div class="wrap_info">
      <div class="title">
        <h3>THÔNG TIN TÀI KHOẢN</h3>
      </div>
      <div class="btn_wrap">
        <!-- <button type="button" class="btn" @click="updateUser()" v-if="showBtn">
          Cập nhật
        </button> -->
        <button type="button" class="btn btn-success" @click="changePassWord()">
          Đổi mật khẩu
        </button>
      </div>

      <div class="wrap_info-table">
        <div class="tracking_register">
          <div class="wraper_price">
            <div class="wrapper">
              <div class="form">
                <!-- <InputField
                  label="Tên đầy đủ: "
                  :value="getUser_info.name"
                  :disabled="isDisableName"
                /> -->
                <OutputField label="Tên đầy đủ: " :value="getUser_info.name" />

                <OutputField label="SDT: " :value="getUser_info.tel" />

                <OutputField label="Email: " :value="getUser_info.email" />

                <OutputField
                  label="Vai trò: "
                  :value="
                    getUser_info.role.name == 'Customer'
                      ? 'Khách hàng'
                      : getUser_info.role.name == 'Admin'
                      ? 'Quản trị viên'
                      : getUser_info.role.name
                  "
                />
              </div>
            </div>

            <div class="wrapper">
              <div class="form">
                <OutputField
                  label="Tổ chức: "
                  :value="
                    getUser_info.organization == ''
                      ? 'Chưa có tổ chức'
                      : getUser_info.organization
                  "
                />

                <OutputField
                  label="Ngày tạo: "
                  :value="formatTime(getUser_info.created_at)"
                />

                <OutputField
                  label="Ngày cập nhật: "
                  :value="formatTime(getUser_info.updated_at)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheLoading :sw="sw" />

    <AlertSuccess
      v-if="success"
      :label="alertTitle"
      @changeSttAlert="changeSttAlert"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputField from "../../input/InputField.vue";
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import { useAuthStore } from "@/stores/auth";
import AlertSuccess from "../../output/alertSuccess.vue";
import TheLoading from "../../TheLoading.vue";
import OutputField from "@/components/output/OutputField.vue";

export default defineComponent({
  mixins: [formatValueMinxin],
  name: "change_infomation_user",

  data() {
    return {
      sw: false as boolean,
      success: false as boolean,
      isDisableName: true as boolean,
      isDisablePhone: true as boolean,
      alertTitle: "" as string,
      isErr: false as boolean,
      showBtn: false as boolean,
    };
  },

  computed: {
    getUser_info() {
      return useAuthStore().user_info;
    },
    email() {
      return useAuthStore().user_info.email;
    },
  },

  methods: {
    // updateUser() {
    //   this.sw = true;
    //   this.validate();

    //   if (this.isErr == false) {
    //     user_info
    //       .update(this.id, {
    //         name: this.name,
    //         tel: this.phone,
    //       })
    //       .then(() => {
    //         this.sw = false;
    //         this.isDisableName = true;
    //         this.isDisablePhone = true;
    //         this.showBtn = false;
    //       })
    //       .catch(() => {
    //         this.alertTitle = "Có lỗi xảy ra.";
    //         this.success = true;
    //         this.sw = false;
    //       });
    //   }
    //   this.sw = false;
    // },

    changeSttAlert() {
      this.success = false;
    },

    // validate() {
    //   if (!this.checkPhoneNumber(this.phone)) {
    //     this.alertTitle = "SĐT không đúng";
    //     this.success = true;
    //     this.isErr = true;
    //     console.log("Ko phải số", this.checkPhoneNumber(this.phone));
    //   } else {
    //     console.log("Nó là số", this.checkPhoneNumber(this.phone));
    //     this.isErr = false;
    //   }
    // },

    changePassWord() {
      useAuthStore()
        .resetPassWord(this.email)
        .then(() => {
          this.success = true;
          this.alertTitle = "Đã gửi yêu cầu. Vui lòng kiểm tra email.";
        })
        .catch(() => {
          this.alertTitle = "Error !";
        });
    },
  },
  components: { AlertSuccess, TheLoading, OutputField },
});
</script>

<style scoped>
.wrapper {
  box-shadow: none !important;
}

button {
  background: #fca901;
  margin-right: 50px;
}

.btn-success {
  background: #5cb85c;
  transition: 1s;
}

.btn_wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.title {
  padding-bottom: 20px;
  padding-left: 20px;
}

.title h3 {
  font-size: 28px;
  color: #57606f;
}
</style>
