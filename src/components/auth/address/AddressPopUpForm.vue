<template>
  <div id="popup_form" class="tracking_register">
    <div class="wrapper wrapper_up">
      <p @click="closeForm()">X</p>
      <div class="title">{{ label }}</div>
      <div class="form">
        <InputField
          label="Tên người nhận"
          :value="consignee"
          type="text"
          @update:value="consignee = $event"
        />

        <InputField
          label="SĐT người nhận"
          :value="tel"
          type="text"
          @update:value="tel = $event"
        />

        <InputFieldAddress
          :id="wardId"
          :address="addressDetail"
          @update:id="wardId = $event"
          @update:address="addressDetail = $event"
        />

        <InputFieldRadio
          label="Địa chỉ mặc định"
          label1="Có"
          label2="Không"
          :value="defaults"
          value1="1"
          value2="0"
          name="defaults"
          @update:value="defaults = $event"
        />

        <InputField
          label="Ghi chú"
          :value="note"
          @update:value="note = $event"
        />

        <InputFieldCheckBox
          label="Tôi đồng ý với những thông tin trên."
          :value="isAccept"
          @update:value="isAccept = $event"
        />

        <ButtonField
          @handleSubmit="handleSubmit"
          :label="labelBtn"
          :disabled="disabled"
        />
      </div>
    </div>
  </div>
  <div v-for="(err, index) in errors" :key="index">
    <AlertErrRegister
      v-if="showErr"
      :title="err.name"
      @handleClose="handleCloseAlert"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputField from "@/components/input/InputField.vue";
import InputFieldAddress from "@/components/input/InputFieldAddress.vue";
import InputFieldRadio from "@/components/input/InputFieldRadio.vue";
import { user_address } from "@/services/auth";
import InputFieldCheckBox from "@/components/input/InputFieldCheckBox.vue";
import ButtonField from "@/components/input/ButtonField.vue";
import AlertErrRegister from "../../output/alertErrRegister.vue";
import _ from "lodash";
import { formatValueMinxin } from "@/mixins/formatValueMixin";

export default defineComponent({
  mixins: [formatValueMinxin],
  props: {
    isRegister: {
      type: String,
      default: "",
      required: true,
    },

    label: {
      type: String,
      default: "",
      required: true,
    },

    labelBtn: {
      type: String,
      default: "",
      required: true,
    },

    idItem: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      showErr: false as boolean,
      disabled: true,
      isShow: true,
      isAccept: false,
      model: true as boolean,
      note: "" as string,
      consignee: "" as string,
      tel: "" as string,
      defaults: "1" as string,
      provinces: [{ id: "" as string, name: "" as string }],
      provinceId: "" as string,
      districts: [{ id: "" as string, name: "" as string }],
      districtId: "" as string,
      wards: [{ id: "" as string, name: "" as string }],
      wardId: "" as string,
      addressDetail: "" as string,
      id: "0" as string,
      isErrors: "" as string,
      errors: [
        {
          name: "",
        },
      ],
    };
  },
  components: {
    InputField,
    InputFieldAddress,
    InputFieldRadio,

    InputFieldCheckBox,
    ButtonField,
    AlertErrRegister,
  },
  created() {
    if (this.isRegister == "false") {
      this.id = this.idItem;
      this.updateAddress();
    } else return;
  },

  watch: {
    isAccept() {
      this.disabled = !this.isAccept;
    },

    errors() {
      this.showErr = true;
    },

    model(value) {
      this.$emit("update:value", value);
    },
  },

  methods: {
    handleCloseAlert() {
      this.showErr = false;
    },
    validate() {
      const valid = [
        {
          name: "Cần nhập tên người gửi.",
          value: _.isEmpty(this.consignee),
        },

        {
          name: "Tên quá ngắn",
          value: this.consignee.length < 2,
        },

        {
          name: "Cần nhập SDT người gửi.",
          value: _.isEmpty(this.tel),
        },

        {
          name: "SĐT không đúng",
          value: !this.checkPhoneNumber(this.tel),
        },

        {
          name: "Tên không đúng",
          value: this.checkNumber(this.consignee),
        },

        {
          name: "SĐT phải lớn hơn 6 ký tự.",
          value: this.tel.length < 6,
        },

        {
          name: "Cần nhập Tỉnh > Quận/huyện > Phường/xã.",
          value: _.isEmpty(this.wardId),
        },

        {
          name: "Cần nhập số nhà, tên đường.",
          value: _.isEmpty(this.addressDetail),
        },

        {
          name: "Tên không chứa ký tự đặc biệt.",
          value: this.checkCharactersString(this.consignee),
        },
      ];

      const getErr = valid.filter((item) => {
        return item.value == true;
      });
      console.log("Danh sach loi: ", getErr);
      if (_.isEmpty(getErr)) {
        this.isErrors = "false";
      } else {
        this.isErrors = "true";
        this.errors = getErr;
      }
    },

    handleSubmit() {
      this.validate();
      if (this.isErrors == "false") {
        this.chooseFunc();
      }
    },

    chooseFunc() {
      if (this.isRegister == "true") {
        user_address
          .create({
            consignee: this.consignee,
            tel: this.tel,
            default: this.defaults,
            ward_id: this.wardId,
            address_detail: this.addressDetail,
            note: this.note,
          })
          .then(() => {
            this.handleClose();
          })
          .catch(() => {
            this.isErrors = "true";
          });
      } else {
        user_address
          .update(this.id, {
            consignee: this.consignee,
            tel: this.tel,
            default: this.defaults,
            ward_id: this.wardId,
            address_detail: this.addressDetail,
            note: this.note,
          })
          .then(() => {
            this.handleClose();
          })
          .catch(() => {
            this.isErrors = "true";
          });
      }
    },

    updateAddress() {
      user_address.get_detail(this.id).then((res) => {
        this.consignee = res.data.consignee;
        this.tel = res.data.tel;
        this.wardId = res.data.ward_id;
        this.addressDetail = res.data.address_detail;
        this.note = res.data.note;
        this.id = res.data.id;
      });
    },

    handleClose() {
      this.isShow = false;
      this.model = this.isShow;
      this.$emit("handleReload");
    },

    closeForm() {
      this.isShow = false;
      this.model = this.isShow;
    },
  },
});
</script>

<style scoped>
.wrapper p {
  cursor: pointer;
  color: #fca901;
  float: right;
}

.wrapper p:hover {
  color: red;
}
</style>
