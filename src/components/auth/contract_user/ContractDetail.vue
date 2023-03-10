<template>
  <div class="tracking_register">
    <div class="wraper_price" id="wrap_contract">
      <div class="wrap_col">
        <div class="wrapper">
          <div class="title title_contract">Chi tiết</div>
          <div class="form">
            <OutputField :value="detail.id" label="Mã đơn" />
            <OutputField
              :value="formatTime(detail.created_at)"
              label="Ngày tạo"
            />
            <OutputField
              :value="formatTime(detail.updated_at)"
              label="Ngày cập nhật"
            />
            <OutputField
              :value="
                detail.sales_organization_id == 'tomoni-jp'
                  ? 'Tomoni - Japan'
                  : detail.sales_organization_id
              "
              label="Công ty mua hàng"
            />
            <OutputField
              :value="
                detail.transport_organization_id == 'se'
                  ? 'SaikoExpress'
                  : detail.transport_organization_id == 'tomoni-vn'
                  ? 'TOMONI-VN'
                  : detail.transport_organization_id
              "
              label="Công ty vận chuyển"
            />
          </div>
        </div>

        <div class="wrapper">
          <div class="title title_contract">Thời gian</div>
          <div class="form">
            <OutputField
              :value="formatTime(detail.start_date)"
              label="Ngày bắt đầu"
            />
            <OutputField
              :value="formatTime(detail.start_date)"
              label="Ngày kết thúc"
            />
          </div>
        </div>
      </div>

      <div class="wrap_col">
        <div class="wrapper">
          <div class="title title_contract">Phí dịch vụ</div>
          <div class="form">
            <OutputField
              :value="
                getPrice(detail.service_fee, detail.service_fee_currency_id)
              "
              label="Phí dịch vụ"
            />
            <OutputField
              :value="
                getPrice(
                  detail.service_fee_paid,
                  detail.service_fee_currency_id
                )
              "
              label="Đã thanh toán"
            />
            <OutputField
              :value="
                getPrice(
                  detail.service_fee_outstanding,
                  detail.service_fee_currency_id
                )
              "
              label="Chưa thanh toán"
            />
            <OutputField
              :value="
                getPrice(
                  detail.service_fee_debited,
                  detail.service_fee_currency_id
                )
              "
              label="Đã ghi nợ"
            />
            <OutputField
              :value="
                getPrice(
                  detail.service_fee_unsolved,
                  detail.service_fee_currency_id
                )
              "
              label="Chưa ghi nợ"
            />
          </div>
        </div>
        <div class="wrapper">
          <div class="title title_contract">Tiền hàng</div>
          <div class="form">
            <OutputField
              :value="
                getPrice(detail.purchase_cost, detail.purchase_cost_currency_id)
              "
              label="Tiền hàng"
            />
            <OutputField
              :value="
                getPrice(
                  detail.purchase_cost_paid,
                  detail.purchase_cost_currency_id
                )
              "
              label="Đã thanh toán"
            />
            <OutputField
              :value="
                getPrice(
                  detail.purchase_cost_outstanding,
                  detail.purchase_cost_currency_id
                )
              "
              label="Chưa thanh toán"
            />
            <OutputField
              :value="
                getPrice(
                  detail.purchase_cost_debited,
                  detail.purchase_cost_currency_id
                )
              "
              label="Đã ghi nợ"
            />
            <OutputField
              :value="
                getPrice(
                  detail.purchase_cost_unsolved,
                  detail.purchase_cost_currency_id
                )
              "
              label="Chưa ghi nợ"
            />
          </div>
        </div>
      </div>

      <div class="wrap_col">
        <div class="wrapper">
          <div class="title title_contract">Đền bù</div>
          <div class="form">
            <OutputField
              :value="
                getPrice(detail.compensation, detail.service_fee_currency_id)
              "
              label="Tiền đền bù"
            />
            <OutputField
              :value="
                getPrice(detail.compensated, detail.service_fee_currency_id)
              "
              label="Đã đền bù"
            />
          </div>
        </div>
        <div class="wrapper">
          <div class="title title_contract">Phụ phí</div>
          <div class="form">
            <OutputField
              label="Phụ phí"
              :value="
                getPrice(detail.additional_cost, detail.service_fee_currency_id)
              "
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OutputField from "@/components/output/OutputField.vue";
import { contracts } from "@/services/order";
import { formatValueMinxin } from "@/mixins/formatValueMixin";

export default defineComponent({
  mixins: [formatValueMinxin],
  props: {
    id_contract: {
      type: String,
      required: true,
    },
  },

  watch: {
    id_contract() {
      this.handleShowDetail(this.id_contract);
    },
  },

  computed: {},

  data() {
    return {
      detail: {
        id: "" as string,
        status: {
          name: "" as string,
        },
        start_date: 0 as number,
        end_date: 0 as number,
        additional_cost: 0 as number,
        purchase_cost_debited: 0 as number,
        purchase_cost: 0 as number,
        purchase_cost_paid: 0 as number,
        purchase_cost_unsolved: 0 as number,
        purchase_cost_outstanding: 0 as number,
        service_fee: 0 as number,
        service_fee_paid: 0 as number,
        service_fee_debited: 0 as number,
        service_fee_unsolved: 0 as number,
        service_fee_outstanding: 0 as number,
        purchase_cost_currency_id: "" as string,
        service_fee_currency_id: "" as string,
        transport_organization_id: "" as string,
        sales_organization_id: "" as string,
        created_at: 0 as number,
        updated_at: 0 as number,
        compensation: 0 as number,
        compensated: 0 as number,
      },
    };
  },

  created() {
    this.firstCheck();
  },

  methods: {
    firstCheck() {
      if (this.id_contract != "") {
        this.handleShowDetail(this.id_contract);
      }
    },
    handleShowDetail(value: string) {
      return contracts.get_contract_detail(value).then((res) => {
        this.detail = res.data;
      });
    },
  },
  components: { OutputField },
});
</script>

<style scoped>
.tracking_register .wrapper {
  box-shadow: none;
}

.wrap_col {
  display: flex;
  align-items: stretch;
  align-content: stretch;
  flex-wrap: wrap;
}
.wraper_price {
  display: flex;
  flex-wrap: nowrap;
  max-width: auto !important;
  width: 100%;
  box-shadow: 2px 2px 4px rgb(0 0 0 / 13%);
  flex-direction: column;
}

#wrap_contract {
  max-width: 100%;
  background: #fff;
}
</style>
