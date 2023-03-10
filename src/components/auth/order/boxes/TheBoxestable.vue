<template>
  <div class="wrapper">
    <div class="title">Thông tin Kiện hàng</div>
    <div class="form">
      <div class="table_wrapper">
        <h4>MÃ ĐƠN:</h4>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th class="thth">ID</th>
              <th class="ththz">Số lượng kiện hàng</th>
              <th class="thth ththl">Sản phẩm</th>
              <th class="thth">Chiều dài</th>
              <th class="thth">Chiều rộng</th>
              <th class="thth">Chiều cao</th>
              <th class="thth">Thể tích</th>
              <th class="thth">Cân nặng</th>
              <th class="ththz">Ngày cập nhật</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(box, index) in getBoxes" :key="index">
              <th>{{ index + 1 }}</th>
              <th>
                <span class="label label-primary">{{ box?.box?.id }}</span>
              </th>
              <th>{{ box?.box?.duplicate }}</th>
              <th>
                <div class="box_product">
                  <div
                    style=""
                    class="box_product_item"
                    v-for="(item, idx) in box?.box?.items"
                    :key="idx"
                  >
                    <div class="img_in_table">
                      <img :src="item?.product?.image_url" />
                    </div>
                    <div class="info_in_table">
                      <span style="font-size: 18px"
                        >Tên: {{ item?.product?.name }}</span
                      >
                      <p style="color: #3c4048">
                        Giá: {{ item?.product?.price }} , Số lượng:
                        {{ item?.quantity }}
                      </p>
                    </div>
                  </div>
                </div>
              </th>
              <th>{{ box?.box?.length }} cm</th>
              <th>{{ box?.box?.width }} cm</th>
              <th>{{ box?.box?.height }} cm</th>
              <th>{{ getVolume(box?.box?.volume) }} m3</th>
              <th>{{ box?.box?.weight }} kg</th>
              <th>{{ formatTime(box?.box?.updated_at) }}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import { orderStore } from "@/stores/order";
import { defineComponent } from "vue";

export default defineComponent({
  mixins: [formatValueMinxin],

  computed: {
    getBoxes() {
      return orderStore().get_boxes;
    },
  },
});
</script>
<style scoped>
.wrapper {
  margin-top: 50px !important;
  max-width: 100% !important;
  height: 800px;
  overflow-y: auto;
}

.thth {
  min-width: 120px;
}
th {
  border: 1px solid #eaeaea;
}

thead tr th {
  border: 1px solid #eaeaea;
}

.table-striped > tbody > tr > th {
  font-weight: 400;
}
.img_in_table {
  float: left;
}
.img_in_table img {
  height: 100px;
  width: 100px;
}

.ththl {
  min-width: 320px;
}

.info_in_table {
  padding-top: 10px;
  margin-left: 10px;
  float: left;
}

.info_in_table p {
  margin-top: 20px;
}
.box_product_item {
  margin: 5px 0px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
}

.dark_mode > .table-striped > tbody > tr:nth-child(odd) > td,
.dark_mode > .table-striped > tbody > tr:nth-child(odd) > th {
  background: #333;
}

.dark_mode p {
  color: #fff !important;
}

.dark_mode .tracking_register {
  background: #333 !important;
}
</style>