<template>
  <div class="container">
    <div class="container_wallet">
      <div class="wallet_wrap">
        <div class="wallet_title">
          <h3>VÍ TÀI KHOẢN</h3>
        </div>
        <div class="wallet_wrapz">
          <div class="table_wrapper">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="thth">Mã Ví</th>
                  <th class="thth">Loại ví</th>
                  <th class="thth">Loại tiền tệ</th>
                  <th class="thth ththz">Tổ chức</th>
                  <th class="thth ththz">Số dư</th>
                  <th class="thth ththz">Số dư khả dụng</th>
                  <th class="thth ththz">Ngày cập nhật</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(wallet, index) in wallets"
                  :key="index"
                  @click="handleChooseWallet(wallet.currency_id)"
                >
                  <TheWalletsTable :wallet="wallet" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <NotiNull v-if="isNull" />
        <div class="border border_long"></div>
        <Wallet
          v-if="isShow"
          :id="id"
          :currency_id="currency_id"
          :balance="balance"
          :amount_available_for_payment="amount_available_for_payment"
          :organization_id="organization_id"
        />
      </div>
    </div>
    <TheLoading :sw="sw" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import TheLoading from "@/components/TheLoading.vue";
import TheWalletsTable from "./TheWalletsTable.vue";
import Wallet from "./Wallet.vue";
import NotiNull from "../order/NotiNull.vue";
import _ from "lodash";
import { useAuthStore } from "@/stores/auth";
import { walletStore } from "@/stores/wallet";

export default defineComponent({
  components: { TheLoading, TheWalletsTable, Wallet, NotiNull },

  mixins: [formatValueMinxin],

  data() {
    return {
      isShow: false as boolean,
      page: 1 as number,
      currency: "" as any,
      currency_id: "" as string,
      balance: 0 as number,
      amount_available_for_payment: 0 as number,
      organization_id: "" as string,
    };
  },

  computed: {
    id() {
      return useAuthStore().get_id_user;
    },
    wallets() {
      return walletStore().wallets;
    },
  },

  watch: {
    id() {
      this.checkChangePage();
    },

    currency() {
      this.isShow = true;
      this.currency_id = this.currency;
    },
  },

  created() {
    this.checkChangePage();
  },

  methods: {
    scrollTo() {
      const element: any = document.getElementById("wallet_detail");
      element.scrollIntoView(false);
    },

    getwallets() {
      walletStore().getWallets(this.id);
    },

    checkChangePage() {
      useAuthStore().get_id_user;

      if (this.$route.params.id) {
        this.currency = this.$route.params.id;
        if (walletStore().wallets[0].id == "") {
          if (useAuthStore().get_id_user != "") {
            this.getwallets();
          }
        }
      } else {
        if (walletStore().wallets[0].id == "") {
          if (useAuthStore().get_id_user != "") {
            this.getwallets();
          }
        }
      }
    },

    handleChooseWallet(currency_id: string) {
      this.isShow = true;
      this.currency_id = currency_id;

      this.$router.push({ path: `/auth/wallet/${currency_id}` });

      this.scrollTo();
    },
  },
});
</script>

<style scoped>
.wallet_wrapz {
  padding-bottom: 50px;
}
</style>
