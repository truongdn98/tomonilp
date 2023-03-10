<template>
  <div class="wrapper">
    <div class="title">Lịch sử giao dịch</div>
    <NotiNull v-if="isNull" />
    <div class="form" v-if="isShowTable">
      <div
        style="
          align-items: baseline;
          border-bottom: 1px solid #fca901;
          padding-bottom: 10px;
          margin: 20px 0px;
        "
        class="inputfield"
        v-for="(history, index) in histories"
        :key="index"
      >
        <FieldHistory :history="history" />
      </div>
    </div>

    <ButtonPagination
      :page="page"
      :current_page="current_page"
      :last_page="last_page"
      @update:page="page = $event"
    />
    <TheLoading :sw="sw" />
  </div>
</template>

<script lang="ts">
import { account } from "@/services/account";
import { defineComponent } from "vue";

import FieldHistory from "@/components/output/FieldHistory.vue";
import NotiNull from "../NotiNull.vue";
import ButtonPagination from "../../../input/ButtonPagination.vue";
import TheLoading from "../../../TheLoading.vue";

export default defineComponent({
  props: {
    id: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      sw: false as boolean,
      page: 1 as number,
      current_page: 0 as number,
      last_page: 0 as number,
      histories: [
        {
          object: {
            name: "" as string,
          },
          transaction_type: {
            name: "" as string,
          },

          currency_id: "" as string,
          voucher_date: 0 as number,
          amount: 0 as number,
        },
      ],
      isShowTable: false,
      isNull: false,
    };
  },

  watch: {
    id() {
      this.getHistory();
    },
    page() {
      this.getHistory();
    },
  },

  created() {
    this.getHistory();
  },

  methods: {
    getHistory() {
      this.isShowTable = true;
      this.sw = true;
      account
        .get_transaction({
          include: "transactionType",
          append: "object",
          page: this.page,
          sort: "-voucher_date",
          [`filter[receipts.receiptable_id]`]: this.id,
        })
        .then((res) => {
          this.histories = res.data.data;
          this.last_page = res.data.last_page;
          this.current_page = res.data.current_page;
          this.sw = false;
          if (res.data.data.length < 1) {
            this.isNull = true;
          } else {
            this.isNull = false;
          }
        })
        .catch(() => {
          this.sw = false;
        });
    },
  },
  components: { FieldHistory, NotiNull, ButtonPagination, TheLoading },
});
</script>

<style scoped>
.wrapper {
  margin-top: 50px !important;
  height: 800px;
  overflow-y: auto;
  max-width: 100% !important;
}
.inputfield{
  justify-content:space-between;
}
</style>
