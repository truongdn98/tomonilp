<template>
  <div class="table_wrapper">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>STT</th>
          <th class="ththz">Mã đơn</th>
          <th class="ththz">Mã Tracking</th>
          <th class="ththz" style="width: 250px">Phương thức vận chuyển</th>
          <th class="ththz">Trạng thái</th>
          <th class="ththz">Tiền hàng</th>
          <th class="ththz">Ghi chú</th>
          <th class="ththz">Ngày cập nhật</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(order, index) in orders" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ order.id }}</td>
          <td>
            <div v-for="tracking in order.trackings" :key="tracking.id">
              <span class="label label-primary">{{ tracking.code }}</span>
            </div>
          </td>
          <td>
            <span
              :class="[
                order.shipment_method_id == 'air'
                  ? 'label-danger'
                  : 'label-info',
                'label',
              ]"
              >{{
                order.shipment_method_id == "air"
                  ? "Đường hàng không"
                  : order.shipment_method_id == "sea"
                  ? "Đường biển"
                  : order.shipment_method_id
              }}</span
            >
          </td>
          <td>
            <span
              :class="[
                order.status.id == 'Pending'
                  ? 'label-default'
                  : order.status.id == 'Approved'
                  ? 'label-success'
                  : order.status.id == 'Debited'
                  ? 'label-warning'
                  : order.status.id == 'Finish'
                  ? 'label-primary'
                  : 'label-info',
                'label',
              ]"
              >{{ order.status.name }}</span
            >
          </td>
          <td>
            {{ formatPrice(order.cost_of_goods) }}
            {{
              order.purchase_cost_currency_id == "JPY"
                ? "¥"
                : order.purchase_cost_currency_id == "VND"
                ? "đ"
                : order.purchase_cost_currency_id
            }}
          </td>
          <td>{{ note }}</td>
          <td>{{ formatTime(order.updated_at) }}</td>
        </tr>
      </tbody>
    </table>

    <ButtonPagination
      :page="page"
      :current_page="current_page"
      :last_page="last_page"
      @update:page="page = $event"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { contracts } from "@/services/order";
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import ButtonPagination from "../../input/ButtonPagination.vue";

export default defineComponent({
  props: {
    id_contract: {
      type: String,
      required: true,
    },
  },

  mixins: [formatValueMinxin],

  data() {
    return {
      current_page: 0 as number,
      last_page: 0 as number,
      order_list: [{}],
      page: 1 as number,
      orders: [
        {
          id: "" as string,
          trackings: [
            {
              id: "" as string,
              code: "" as string,
            },
          ],
          shipment_method_id: "" as string,
          status: {
            id: "" as string,
            name: "" as string,
          },
          cost_of_goods: 0 as number,
          note: "" as string,
          updated_at: 0 as number,
          purchase_cost_currency_id: "" as string,
        },
      ],
    };
  },

  watch: {
    id_contract() {
      this.getOrderListByContract(this.id_contract);
    },

    order_list(value) {
      this.$emit("update:value", value);
    },

    page() {
      this.getOrderListByContract(this.id_contract);
    },
  },

  created() {
    this.firstCheck();
  },

  methods: {
    firstCheck() {
      if (this.id_contract != "") {
        this.getOrderListByContract(this.id_contract);
      }
    },
    // `/api/orders?include=trackings,status&append=first_item&sort=updated_at&filter[contract_id]=${id}&page=${page}`
    getOrderListByContract(value: string) {
      return contracts
        .get_orders({
          include: "trackings,status",
          append: "first_item",
          sort: "updated_at",
          [`filter[contract_id]`]: value,
          page: this.page,
        })
        .then((res) => {
          this.orders = res.data.data;
          this.current_page = res.data.current_page;
          this.last_page = res.data.last_page;
          this.order_list = this.orders.map((a) => a.id);
        });
    },
  },
  components: { ButtonPagination },
});
</script>
