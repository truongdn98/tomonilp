<template>
  <div class="container">
    <div class="wrap">
      <div style="padding-bottom: 30px; display: flex">
        <h3 class="section-title">DANH SÁCH ĐỊA CHỈ</h3>
      </div>
      <button
        @click="isShowFormCreate = !isShowFormCreate"
        type="button"
        class="btn"
      >
        Thêm địa chỉ
      </button>

      <button
        @click="isFormOrder = !isFormOrder"
        type="button"
        class="btn btn-success"
      >
        Tạo đơn hàng
      </button>
      <div class="table_wrapper">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th class="thz"></th>
              <th class="thth">Mặc định</th>
              <th class="ththz">Tên người nhận</th>
              <th class="ththz">Số điện thoại</th>
              <th class="ththz" style="min-width: 300px">Địa chỉ</th>
              <th class="ththz">Ghi chú</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(item, idx) in address" :key="idx">
              <td>{{ idx + 1 }}</td>
              <td class="col_func">
                <div class="func">
                  <i class="fa fa-trash-o" @click="deleteAddress(item.id)"></i>
                  <i
                    class="fa fa-pencil-square-o"
                    @click="updateAddress(item.id)"
                  ></i>
                </div>
              </td>
              <td>
                <span
                  :class="{
                    'label label-success': item.default == true,
                  }"
                  >{{ item.default == true ? "Mặc định" : "" }}</span
                >
              </td>

              <td
                @click="
                  handleShowDetail(
                    item.consignee,
                    item.tel,
                    item.full_address,
                    item.note
                  )
                "
              >
                {{ item.consignee }}
              </td>
              <td
                @click="
                  handleShowDetail(
                    item.consignee,
                    item.tel,
                    item.full_address,
                    item.note
                  )
                "
              >
                {{ item.tel }}
              </td>
              <td
                @click="
                  handleShowDetail(
                    item.consignee,
                    item.tel,
                    item.full_address,
                    item.note
                  )
                "
              >
                {{ item.full_address }}
              </td>
              <td>{{ item.note }}</td>
            </tr>
          </tbody>
        </table>

        <AcceptPopup
          label="Bạn chưa có địa chỉ mặc định. Hãy tạo địa chỉ !"
          v-if="isShowAcceptCreate"
          @Accept="handleOK"
          @Cancel="handleCancel"
        />

        <TheAddressPopUpForm
          isRegister="true"
          label="Đăng ký địa chỉ"
          labelBtn="Tạo địa chỉ"
          @update:value="isShowFormCreate = $event"
          v-if="isShowFormCreate"
          idItem="0"
          @handleReload="handleReload"
        />

        <TheAddressPopUpForm
          isRegister="false"
          label="Cập nhật địa chỉ"
          labelBtn="Cập nhật"
          @update:value="isShowFormUpdate = $event"
          v-if="isShowFormUpdate"
          :idItem="idItem"
          @handleReload="handleReload"
          @closeForm="closeForm"
        />
        <div v-if="isFormOrder" class="popup_tracking">
          <div class="popup_tracking-container">
            <div class="popup_tracking-wrap">
              <p @click="handleClose()">X</p>
              <TrackingRegister />
            </div>
          </div>
        </div>

        <AcceptPopup
          label="Bạn có chắc muốn xóa ?"
          v-if="isFormDelete"
          @Accept="handleDelete"
          @Cancel="handleCancel"
        />

        <AddressDetail
          label="Chi tiết"
          v-if="isDetail"
          :name="detail.consignee"
          :address="detail.full_address"
          :tel="detail.tel"
          :note="detail.note"
          @close="close"
        />
      </div>

      <AlertErrRegister
        v-if="isErrors"
        :title="errors.title"
        @handleClose="changeSttAlert"
      />

      <AlertSuccess
        v-if="success"
        :label="titleSuccess"
        @changeSttAlert="changeSttAlert"
      />
    </div>
    <TheLoading :sw="sw" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { user_address } from "@/services/auth";
import TheAddressPopUpForm from "./AddressPopUpForm.vue";
import AcceptPopup from "@/components/output/acceptPopup.vue";
import AddressDetail from "./AddressDetail.vue";
import _ from "lodash";
import TheLoading from "../../TheLoading.vue";
import TrackingRegister from "../../tracking/TrackingRegister.vue";
import AlertSuccess from "../../output/alertSuccess.vue";
import AlertErrRegister from "../../output/alertErrRegister.vue";
import { useAuthStore } from "@/stores/auth";
import { addressStore } from "@/stores/address";

export default defineComponent({
  components: {
    TheAddressPopUpForm,
    AcceptPopup,
    AddressDetail,
    TheLoading,
    TrackingRegister,
    AlertSuccess,
    AlertErrRegister,
  },
  data() {
    return {
      isFormOrder: false as boolean,
      sw: false,
      isShowAcceptCreate: false,
      isDetail: false,
      isErrors: false as boolean,
      isFormDelete: false,
      idItem: "" as string,
      isShowFormCreate: false,
      isShowFormUpdate: false,
      success: false as boolean,
      titleSuccess: "" as string,
      detail: {
        consignee: "" as string,
        full_address: "" as string,
        tel: "" as string,
        note: "" as string,
      },

      errors: {
        title: "" as string,
      },
      idDelete: "" as string | number,
      // address: [
      //   {
      //     id: "" as string,
      //     consignee: "" as string,
      //     address_detail: "" as string,
      //     tel: "" as string,
      //     ward_id: "" as string | number,
      //     note: "" as string,
      //     default: true as boolean,
      //     full_address: "" as string,
      //   },
      // ],
    };
  },

  computed: {
    id() {
      return useAuthStore().get_id_user;
    },

    address() {
      return addressStore().get_address;
    },
  },
  watch: {
    id() {
      this.getId();
    },
  },

  created() {
    this.getId();
  },

  methods: {
    getId() {
      useAuthStore().get_id_user;
      if (addressStore().address[0].id == "") {
        if (useAuthStore().get_id_user != "") {
          this.getAddress();
        }
      }
    },
    handleCancel() {
      this.isFormDelete = false;
      this.isShowAcceptCreate = false;
    },

    handleClose() {
      this.isFormOrder = false;
    },

    close() {
      this.isDetail = false;
    },

    showAcceptCreate() {
      this.isShowAcceptCreate = true;
    },
    handleOK() {
      this.isShowAcceptCreate = false;
      this.isShowFormCreate = true;
    },

    handleShowDetail(
      consignee: string,
      tel: string,
      full_address: string,
      note: string
    ) {
      this.isDetail = true;
      this.detail.consignee = consignee;
      this.detail.tel = tel;
      this.detail.full_address = full_address;
      this.detail.note = note;
    },

    handleDelete() {
      user_address
        .delete(this.idDelete)
        .then(() => {
          this.success = true;
          this.titleSuccess = "Xóa thành công.";
          this.getAddress();
        })
        .catch(() => {
          this.isErrors = true;
          this.errors.title =
            "Không thể xóa địa chỉ mặc định, hãy cập nhật hoặc chọn mục khác.";
        });
      this.isFormDelete = false;
    },

    getAddress() {
      this.sw = true;

      addressStore()
        .getAddress(this.id)
        .then((res) => {
          this.sw = false;
        })
        .catch(() => {
          this.sw = false;
        });
    },
    deleteAddress(value: string) {
      this.isFormDelete = true;
      this.idDelete = value;
    },

    changeSttAlert() {
      this.isErrors = false;
      this.success = false;
    },

    updateAddress(value: string) {
      this.isShowFormUpdate = !this.isShowFormUpdate;
      this.idItem = value;
    },
    handleReload() {
      this.getAddress();
    },

    closeForm() {
      this.isShowFormCreate = false;
      this.isShowFormUpdate = false;
    },
  },
});
</script>

<style scoped>
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
  background: #ced6e0;
}

.wrapper p {
  cursor: pointer;
  color: #fca901;
  float: right;
}

.wrapper p:hover {
  color: red;
}

.ththx {
  min-width: 380px;
}

button {
  background: #fca901;
  float: right;
  margin: 0px 50px 10px 0px;
}

.section-title {
  font-weight: 500;
  color: black;
  margin-bottom: 10px;
  line-height: 1.1;
  padding-left: 30px;
  color: #57606f;
  font-size: 28px;
}

.section-title span {
  color: crimson;
}

.icon {
  padding-left: 20px;
}

.fa {
  cursor: pointer;
  font-size: 20px;
  margin: 5px 10px 0px 10px;
}

.fa-trash-o {
  color: red;
}

.fa-pencil-square-o {
  color: #2f3542;
}
.func {
  display: flex;
}

.fa:hover {
  color: #fca901;
}

table {
  border: 1px solid #dcdcdc;
  max-height: 700px;
  display: block;
  overflow-y: auto;
  max-width: 1200px;
  overflow-x: auto;
  margin: 0 auto;
}

table thead {
  background: #dcdcdc;
}
.container {
  position: relative;
  padding-bottom: 100px;
}

.btn-success {
  background: #5cb85c;
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
</style>
