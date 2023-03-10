<template>
  <div>
    <div class="container" style="max-width: 100%">
      <div class="tracking_register">
        <div class="wrapper">
          <div class="title">LỊCH SỬ GIAO DỊCH</div>
          <div class="form">
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
              <FieldHistoryContract :history="history" />
            </div>
          </div>

          <ButtonPagination
            :page="page"
            :current_page="current_page"
            :last_page="last_page"
            @update:page="page = $event"
          />
        </div>
      </div>
    </div>

    <TheLoading :sw="sw" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { account } from "@/services/account";
import FieldHistoryContract from "../../output/FieldHistoryContract.vue";
import TheLoading from "../../TheLoading.vue";
import ButtonPagination from "../../input/ButtonPagination.vue";

export default defineComponent({
  props: {
    id_contract: {
      type: String,
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
            email: "" as string,
          },
          transaction_type: {
            name: "" as string,
          },
          prepared_by: {
            name: "" as string,
            email: "" as string,
          },

          wallet: {
            id: "" as string,
            currency_id: "" as string,
          },
          amount: 0 as number,
          voucher_date: 0 as number,
        },
      ],
    };
  },
  watch: {
    id_contract() {
      this.getContractHistory();
    },

    page() {
      this.getContractHistory();
    },
  },

  created() {
    this.getContractHistory();
  },
  methods: {
    getContractHistory() {
      this.sw = true;
      return account
        .get_transaction({
          sort: "-voucher_date",
          page: this.page,
          include: "transactionType",
          append: "object,prepared_by,wallet",
          [`filter[receipts.receiptable_id]`]: this.id_contract,
        })
        .then((res) => {
          this.histories = res.data.data;
          this.current_page = res.data.current_page;
          this.last_page = res.data.last_page;
          this.sw = false;
        })
        .catch(() => {
          this.sw = false;
        });
    },
  },
  components: {
    FieldHistoryContract,
    TheLoading,
    ButtonPagination,
  },
});
</script>

<style scoped>
.container {
  padding: 50px 0px 0px 0px !important ;
}

.tracking_register .wrapper {
  max-width: 100%;
}
</style>
