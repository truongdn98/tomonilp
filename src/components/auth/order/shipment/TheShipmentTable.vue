<template>
  <div class="wrapper">
    <div class="title">Thông tin giao hàng</div>
    <div class="form">
      <div class="inputfield">
        <label>Tên người gửi</label>
        <p>{{ sender_name }}</p>
      </div>
      <div class="inputfield">
        <label>SĐT người gửi</label>
        <p>{{ sender_phone }}</p>
      </div>
      <div class="inputfield">
        <label>Tên người nhận</label>
        <p>{{ receiver_name }}</p>
      </div>
      <div class="inputfield">
        <label>SĐT người nhận</label>
        <p>{{ receiver_phone }}</p>
      </div>
      <div class="inputfield">
        <label>Địa chỉ</label>
        <p>{{ address }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    receiver_phone: {
      type: String,
      default: "",
      required: true,
    },

    receiver_name: {
      type: String,
      default: "",
      required: true,
    },

    address: {
      type: String,
      default: "",
      required: true,
    },

    sender_name: {
      type: String,
      default: "",
      required: true,
    },

    sender_phone: {
      type: String,
      default: "",
      required: true,
    },
  },
  // [
  //   "receiver_phone",
  //   "receiver_name",
  //   "address",
  //   "sender_name",
  //   "sender_phone",
  // ],
});
</script>

<style scoped>
.wrapper {
  margin-top: 50px !important;

}
</style>
