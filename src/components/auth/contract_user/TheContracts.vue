<template>
  <div class="container">
    <div class="container_contracts">
      <div class="contracts_wrap">
        <div class="contract_wrap-title">
          <h3>DANH SÁCH HỢP ĐỒNG</h3>
        </div>
        <div class="contract_wrap-content">
          <div class="table_wrapper">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="thth">Mã hợp đồng</th>
                  <th class="thth">Trạng thái</th>
                  <th class="thth ththz">Công ty vận chuyển</th>
                  <th class="thth ththz">Công ty mua hàng</th>
                  <th class="thth">Phí dịch vụ</th>
                  <th class="thth">Nợ phí dịch vụ</th>
                  <th class="thth">Nợ tiền hàng</th>
                  <th class="thth ththz">Ngày cập nhật</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="item in contracts"
                  :key="item.id"
                  @click="handleClick(item.id)"
                  :class="{ activeItem: item.id == id_contract }"
                >
                  <TheContractItem :item="item" />
                </tr>
              </tbody>
            </table>

            <ButtonPagination
              :page="page"
              :current_page="current_page"
              :last_page="last_page"
              @update:page="page = $event"
            />

            <TheLoading :sw="sw" />

            <NotiNull v-if="isNull" />
          </div>

          <div class="contract_table-slide" v-if="isShow">
            <div class="contract_table-menu">
              <div
                class="contract_table-menu-item"
                :class="{ active: chooseTable == '1' }"
                @click="handleChoose('1')"
              >
                <i class="fa fa-tasks" aria-hidden="true"></i>
                <span>Chi tiết hợp đồng</span>
              </div>
              <div
                class="contract_table-menu-item"
                :class="{ active: chooseTable == '2' }"
                @click="handleChoose('2')"
              >
                <i class="fa fa-list-ol" aria-hidden="true"></i>
                <span>Danh sách đơn hàng</span>
              </div>

              <div
                class="contract_table-menu-item"
                :class="{ active: chooseTable == '3' }"
                @click="handleChoose('3')"
              >
                <i class="fa fa-truck"></i>
                <span>Vận đơn</span>
              </div>

              <div
                class="contract_table-menu-item"
                :class="{ active: chooseTable == '4' }"
                @click="handleChoose('4')"
              >
                <i class="fa fa-comments-o" aria-hidden="true"></i>
                <span>Giao dịch phát sinh</span>
              </div>

              <div
                class="contract_table-menu-item"
                :class="{ active: chooseTable == '5' }"
                @click="handleChoose('5')"
              >
                <i class="fa fa-edit"></i>
                <span>Nhật ký</span>
              </div>
            </div>

            <div class="contract_table-content">
              <ContractDetail
                :id_contract="id_contract"
                v-show="chooseTable == '1'"
              />
              <ContractOrders
                style="padding-top: 50px"
                :id_contract="id_contract"
                v-show="chooseTable == '2'"
                :value="order_list"
                @update:value="order_list = $event"
              />
              <ContractLading
                :id_contract="id_contract"
                v-show="chooseTable == '3'"
                :order_list="order_list"
              />
              <ContractHistory
                :id_contract="id_contract"
                v-show="chooseTable === '4'"
              />
              <ContractDiary
                :id_contract="id_contract"
                v-show="chooseTable === '5'"
                style="padding-top: 50px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheContractItem from "./TheContractItem.vue";
import ContractDetail from "./ContractDetail.vue";
import ContractOrders from "./ContractOrders.vue";
import ContractLading from "./ContractLading.vue";
import ContractHistory from "./ContractHistory.vue";
import ContractDiary from "./ContractDiary.vue";
import ButtonPagination from "../../input/ButtonPagination.vue";
import TheLoading from "../../TheLoading.vue";
import _ from "lodash";
import NotiNull from "../order/NotiNull.vue";
import { contractStore } from "@/stores/contract";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  data() {
    return {
      order_list: [],
      isNull: false as boolean,
      sw: false as boolean,
      chooseTable: "1" as any,
      isShow: false as boolean,
      id_contract: "" as any,
      page: 1 as number,
    };
  },
  watch: {
    page() {
      this.getContracts();
    },
  },

  computed: {
    contracts() {
      return contractStore().contracts;
    },
    last_page() {
      return contractStore().last_page;
    },
    current_page() {
      return contractStore().current_page;
    },
  },

  created() {
    this.checkChangePage();
  },
  methods: {
    checkChangePage() {
      if (this.$route.params.id) {
        this.id_contract = this.$route.params.id;
        this.isShow = true;
        this.chooseTable = this.$route.query.tab;
        this.getContracts();
      } else {
        if (contractStore().contracts[0].id == "") {
          this.getContracts();
        }
      }
    },

    handleChoose(value: string) {
      this.chooseTable = value;
      this.$router.push({ query: { tab: value } });
    },

    handleClick(value: string) {
      this.id_contract = value;
      this.isShow = true;
      this.$router.push({
        path: `/auth/contracts/${value}`,
        query: { tab: "1" },
      });
    },
    getContracts() {
      this.sw = true;
      return contractStore()
        .getContracts(this.page)
        .then(() => {
          this.sw = false;
        })
        .catch(() => {
          this.sw = false;
        });
    },
  },
  components: {
    TheContractItem,
    ContractDetail,
    ContractOrders,
    ContractLading,
    ContractHistory,
    ContractDiary,
    ButtonPagination,
    TheLoading,
    NotiNull,
  },
});
</script>

<style scoped>
.active {
  border-bottom: 3px solid #3742fa;
}

.activeItem {
  background: #747d8c;
  color: #fca901;
}

.container {
  padding-bottom: 50px;
}

.contract_wrap-title {
  padding: 0px 0px 30px 30px;
  color: #57606f;
}

@media screen and (max-width: 600px) {
  .contract_wrap-title {
    padding-top: 80px;
  }
}
</style>
