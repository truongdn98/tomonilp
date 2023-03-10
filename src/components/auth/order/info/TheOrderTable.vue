<template>
  <div class="tracking_register">
    <div class="wrapper">
      <div class="title title_contract">Thông tin đơn hàng</div>
      <div class="form">
        <div class="inputfield">
          <label>Mã đơn</label>
          <p>{{ getOrder?.id }}</p>
        </div>
        <div class="inputfield">
          <label>Mã Tracking*</label>
          <div>
            <span
              v-for="(tracking, inx) in getOrder?.trackings"
              :key="inx"
              style="display: block"
              >{{ tracking?.code }}</span
            >
          </div>
        </div>

        <div class="inputfield">
          <label>Phí dịch vụ</label>
          <p>
            {{
              getPrice(getOrder?.service_fee, getOrder?.service_fee_currency_id)
            }}
          </p>
        </div>
        <div class="inputfield">
          <label>Trạng thái</label>
          <p>{{ getOrder?.status?.name }}</p>
        </div>
        <div class="inputfield">
          <label>Phương thức vận chuyển</label>
          <p>
            {{
              getOrder?.shipment_method_id == "air"
                ? "Đường hàng không"
                : "Đường biển"
            }}
          </p>
        </div>
        <div class="inputfield">
          <label>Ghi chú</label>
          <p>{{ getOrder?.note }}</p>
        </div>
        <div class="inputfield">
          <label>Ngày tạo</label>
          <p>{{ formatTime(getOrder?.created_at) }}</p>
        </div>
        <div class="inputfield">
          <label>Ngày cập nhật gần nhất</label>
          <p>{{ formatTime(getOrder?.updated_at) }}</p>
        </div>
      </div>
    </div>

    <div class="wrapper">
      <div class="title title_contract">Thông tin giao hàng</div>
      <div class="form">
        <div class="inputfield">
          <label>Tên người gửi</label>
          <p>{{ getOrder?.shipment_info?.sender_name }}</p>
        </div>
        <div class="inputfield">
          <label>SĐT người gửi</label>
          <p>{{ getOrder?.shipment_info?.sender_tel }}</p>
        </div>
        <div class="inputfield">
          <label>Tên người nhận</label>
          <p>{{ getOrder?.shipment_info?.consignee }}</p>
        </div>
        <div class="inputfield">
          <label>SĐT người nhận</label>
          <p>{{ getOrder?.shipment_info?.tel }}</p>
        </div>
        <div class="inputfield">
          <label>Địa chỉ</label>
          <p>{{ getOrder?.shipment_info?.full_address }}</p>
        </div>
        <div class="inputfield">
          <label>Ghi chú</label>
          <p>{{ getOrder?.shipment_info?.note }}</p>
        </div>
        <div class="inputfield">
          <label>Ngày tạo</label>
          <p>{{ formatTime(getOrder?.shipment_info?.created_at) }}</p>
        </div>
        <div class="inputfield">
          <label>Ngày cập nhật</label>
          <p>{{ formatTime(getOrder?.shipment_info?.updated_at) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import { defineComponent } from "vue";
import { orderStore } from "@/stores/order";

export default defineComponent({
  mixins: [formatValueMinxin],
  computed: {
    getOrder() {
      return orderStore().get_order;
    },
  },
});
</script>
<style scoped>
.wrapper {
  margin-top: 50px !important;
  box-shadow: none !important;
  padding-top: 0px !important;
}

.tracking_register {
  margin: 50px auto;
  display: flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  border-bottom: 2px solid #b2bec3;
  background: #fff;
}

.tracking_register .wrapper .form .inputfield p {
  max-width: 50%;
}
</style>