<template>
  <div class="contract_table-slide">
    <div class="contract_table-menu" id="order_detail">
      <div
        class="contract_table-menu-item"
        :class="{ active: chooseTable == '1' }"
        @click="handleChoose('1')"
      >
        <i class="fa fa-tasks" aria-hidden="true"></i>
        <span>Thông tin đơn hàng</span>
      </div>

      <div
        class="contract_table-menu-item"
        :class="{ active: chooseTable == '3' }"
        @click="handleChoose('3')"
      >
        <i class="fa fa-archive"></i>
        <span>Kiện hàng</span>
      </div>

      <div
        class="contract_table-menu-item"
        :class="{ active: chooseTable == '4' }"
        @click="handleChoose('4')"
      >
        <i class="fa fa-tasks"></i>
        <span>Nhật ký</span>
      </div>

      <div
        class="contract_table-menu-item"
        :class="{ active: chooseTable == '5' }"
        @click="handleChoose('5')"
      >
        <i class="fa fa-book"></i>
        <span>Lịch sử</span>
      </div>

      <div
        class="contract_table-menu-item"
        :class="{ active: chooseTable == '6' }"
        @click="handleChoose('6')"
      >
        <i class="fa fa-truck"></i>
        <span>Vận đơn</span>
      </div>
    </div>

    <div class="contract_table-content">
      <TheOrderTable v-show="chooseTable == '1'" />
      <TheBoxestable v-show="chooseTable == '3'" />
      <TheDiaryTable :id="id" v-show="chooseTable == '4'" />
      <TheHistory :id="id" v-show="chooseTable == '5'" />
      <TheLadingTable v-show="chooseTable == '6'" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheOrderTable from "./info/TheOrderTable.vue";
import TheLadingTable from "./lading_bill/TheLadingTable.vue";
import TheDiaryTable from "./diary/TheDiaryTable.vue";
import TheHistory from "./history/TheHistory.vue";
import TheBoxestable from "./boxes/TheBoxestable.vue";
import { orderStore } from "@/stores/order";
import { ladingBillStore } from "@/stores/lading_bills";

export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
      required: false,
    },
  },
  data() {
    return {
      chooseTable: "1" as string,
      id_order: "" as string,
    };
  },
  created() {
    this.getAll();
    this.getLadingBills();
  },
  watch: {
    id() {
      this.getAll();
      this.getLadingBills();
    },
  },
  methods: {
    handleChoose(value: string) {
      this.chooseTable = value;
    },

    getAll() {
      orderStore().getOrder(this.id);
    },

    getLadingBills() {
      const arr_order = [this.id];
      ladingBillStore().getLadingBill(arr_order);
    },
  },
  components: {
    TheOrderTable,
    TheLadingTable,
    TheDiaryTable,
    TheHistory,
    TheBoxestable,
  },
});
</script>

<style scoped>
.active {
  border-bottom: 3px solid #3742fa;
}
</style>
