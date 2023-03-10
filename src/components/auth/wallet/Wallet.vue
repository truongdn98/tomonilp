<template>
  <div class="show_table_info">
    <div class="wallet_wrap-info">
      <div class="icon_reload"></div>
      <div class="wallet_title">
        <h3>CHI TIẾT VÍ : {{ id_wallet }}</h3>
      </div>
      <div class="wallet_info" id="wallet_detail">
        <div class="wallet_info-item">
          <div class="title_wallet">
            <span>TỔ CHỨC:</span>
          </div>

          <p class="label label-primary">
            {{ organization_id == "tomoni-vn" ? "TOMONI-VN" : organization_id }}
          </p>
        </div>

        <div class="wallet_info-item">
          <div class="title_wallet">
            <span>ĐƠN VỊ TIỀN TỆ:</span>
          </div>

          <span class="label label-danger" style="color: #fff">{{
            currency_id
          }}</span>
        </div>

        <div class="wallet_info-item">
          <div class="title_wallet">
            <span>SỐ DƯ:</span>
          </div>

          <p>
            {{ getPrice(balance, currency_id) }}
          </p>
        </div>

        <div class="wallet_info-item">
          <div class="title_wallet">
            <span>SỐ DƯ KHẢ DỤNG:</span>
          </div>
          <p>
            {{ getPrice(amount_available_for_payment, currency_id) }}
          </p>
        </div>
      </div>
    </div>

    <div class="border border_long"></div>

    <div class="wrap_input_search">
      <div class="filter_icon">
        <span class="glyphicon glyphicon-filter"></span>
      </div>
      <div class="dropdown" style="margin-right: 20px; float: left">
        <button
          class="btn btn-default dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
        >
          {{
            filterName_type == ""
              ? "Tìm theo trạng thái đơn hàng..."
              : filterName_type
          }}
          <span class="caret"></span>
        </button>
        <ul
          class="dropdown-menu"
          aria-labelledby="dropdownMenu1"
          style="width: 100%"
        >
          <li @click="handleFilterType('', '')">
            <a>Tất cả</a>
          </li>
          <li
            v-for="(item, index) in type_transaction"
            :key="index"
            @click="handleFilterType(item.id, item.name)"
          >
            <a>{{ item.name }}</a>
          </li>
        </ul>
      </div>

      <div class="filter_calendar">
        <button
          class="btn btn-default"
          @click="showCalendar = !showCalendar"
          style="background: #fff"
        >
          Thời gian
        </button>

        <InputDateField
          v-if="showCalendar"
          :filter_date="dates"
          @update:filter_date="dates = $event"
        />
      </div>
    </div>

    <div class="filter_label_wrap">
      <div class="filter_label" v-show="filterName_type != ''">
        <span class="label label-primary"
          >{{ filterName_type }}
          <span class="btn_close_label" @click="handleCloseLabelType()"
            >x</span
          ></span
        >
      </div>

      <div class="filter_label" v-show="dates.end != 0">
        <span class="label label-success"
          >Thời gian
          <span class="btn_close_label" @click="handleCloseLabelTime()"
            >x</span
          ></span
        >
      </div>
    </div>

    <div class="table_wrapper">
      <table class="table table-striped">
        <thead>
          <tr id="wallet_detail">
            <th>STT</th>
            <th class="thth ththz">Ngày chứng từ</th>
            <th class="thth">Mã giao dịch</th>
            <th class="thth">Loại giao dịch</th>
            <th class="thth">Số tiền</th>
            <th class="thth">Đối tượng</th>
            <th class="thth">Người thực hiện</th>
            <th class="thth">Thẻ</th>
            <th class="thth">Mô tả</th>
            <th class="thth ththz">Ngày cập nhật</th>
          </tr>
        </thead>

        <tbody>
          <TheWalletItem
            v-for="(item, index) in transaction"
            :key="index"
            :item="item"
            :index="index"
            :currency_id="currency_id"
          />
        </tbody>
      </table>

      <ButtonPagination
        :page="page"
        :current_page="current_page"
        :last_page="last_page"
        @update:page="page = $event"
      />
    </div>
    <TheLoading :sw="sw" />
  </div>
</template>

<script lang="ts">
import { account } from "@/services/account";
import { defineComponent } from "vue";
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import TheWalletItem from "@/components/auth/wallet/WalletItem.vue";
import TheLoading from "@/components/TheLoading.vue";
import ButtonPagination from "../../input/ButtonPagination.vue";
import _ from "lodash";
import InputDateField from "@/components/input/InputDateField.vue";

export default defineComponent({
  name: "wallet-page",
  components: { TheWalletItem, TheLoading, ButtonPagination, InputDateField },
  props: {
    id: {
      type: String,
      default: "",
      required: true,
    },

    currency_id: {
      type: String,
      default: "",
      required: false,
    },
  },

  watch: {
    currency_id() {
      if (this.id != "") {
        this.getTransaction();
      }
    },
    id() {
      if (this.id != "") {
        this.getTransaction();
      }
    },
    page() {
      this.getTransaction();
    },

    dates() {
      this.handleFilterTime(this.getTime);
    },
  },

  created() {
    this.check();
    this.getTransactionTypes();
  },
  mixins: [formatValueMinxin],

  data() {
    return {
      dates: {
        start: 0 as number,
        end: 0 as number,
      },
      filter_time_between: {
        updated_at: "" as string,
      },
      filterName_type: "" as string,
      filter_list: {
        type_id: "" as string,
      },
      type_transaction: [
        {
          id: "" as string,
          name: "" as string,
        },
      ],
      showCalendar: false,
      organization_id: "" as string,
      balance: 0 as number,
      amount_available_for_payment: 0 as number,
      sw: false as boolean,
      current_page: 0 as number,
      last_page: 0 as number,
      page: 1 as number,
      transaction: [
        {
          amount: 0 as number,
          card: "" as string,
          code_ref: "" as string,
          created_at: 0 as number,
          updated_at: 0 as number,
          currency_id: "" as string,
          description: "" as string,
          object: {
            name: "" as string,
          },
          prepared_by: {
            name: "" as string,
          },
          type_id: "" as string,
          transaction_type: {
            name: "" as string,
          },
        },
      ],
    };
  },

  computed: {
    getTime() {
      return `${this.toTimeStamp(this.dates.start, "")},${this.toTimeStamp(
        this.dates.end,
        ""
      )}`;
    },
  },

  methods: {
    handleCloseLabelTime() {
      this.dates.start = 0;
      this.dates.end = 0;
      this.filter_time_between.updated_at = "";
      this.getTransaction();
    },

    handleCloseLabelType() {
      this.filter_list.type_id = "";
      this.filterName_type = "";
      this.getTransaction();
    },

    handleFilterTime(value: string) {
      this.filter_time_between.updated_at = value;
      this.getTransaction();
    },
    handleFilterType(value: string, name: string) {
      this.filter_list.type_id = value;
      this.filterName_type = name;
      this.getTransaction();
    },
    check() {
      if (this.currency_id != "") {
        this.getTransaction();
      }
    },
    getTransactionTypes() {
      account.get_type_transaction().then((res) => {
        this.type_transaction = res.data;
      });
    },
    getTransaction() {
      this.sw = true;
      const filterList = _.mapKeys(this.filter_list, function (value, key) {
        return `filter[${key}]`;
      });
      const filterFields = _.pickBy(filterList);

      const filterList2 = _.mapKeys(
        this.filter_time_between,
        function (value, key) {
          return `filter_between[${key}]`;
        }
      );
      const filterFields2 = _.pickBy(filterList2);
      account
        .get_transaction({
          sort: "-voucher_date",
          append: "object,prepared_by,wallet",
          include: "receipts,card,transactionType",
          page: this.page,
          [`filter[transactionable_type]`]: "user",
          [`filter[transactionable_id]`]: this.id,
          [`filter[currency_id]`]: this.currency_id,
          ...filterFields,
          ...filterFields2,
        })
        .then((res) => {
          this.transaction = res.data.data;
          this.sw = false;
          this.current_page = res.data.current_page;
          this.last_page = res.data.last_page;
          this.organization_id = res.data.data[0]?.wallet.organization_id;
          this.balance = res.data.data[0]?.wallet.balance || 0;
          this.amount_available_for_payment =
            res.data.data[0]?.wallet.amount_available_for_payment || 0;
          this.showCalendar = false;
        })
        .catch(() => {
          this.sw = false;
        });
    },
  },
});
</script>
<style scoped>
.table-striped > tbody > tr:nth-child(odd) > th {
  border-right: 1px solid #ddd;
}
</style>
