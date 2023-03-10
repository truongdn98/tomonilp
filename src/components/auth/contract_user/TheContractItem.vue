<template>
  <td>{{ item.id }}</td>
  <td>
    <span
      :class="[
        item.status_id == 'Closed'
          ? 'label-danger'
          : item.status_id == 'Open'
          ? 'label-success'
          : 'label-primary',
        'label',
      ]"
    >
      {{ item.status.name }}</span
    >
  </td>
  <td>
    <span class="label label-warning" style="font-size: 14px">{{
      item.transport_organization_id == "se"
        ? "SaikoExpress"
        : item.transport_organization_id == "tomoni-vn"
        ? "TOMONI-VN"
        : item.transport_organization_id
    }}</span>
  </td>
  <td>
    {{
      item.sales_organization_id == "tomoni-jp"
        ? "Tomoni - Japan"
        : item.sales_organization_id
    }}
  </td>
  <td>
    {{ getPrice(item.service_fee, item.service_fee_currency_id) }}
  </td>
  <td>
    {{ getPrice(item.service_fee_paid, item.service_fee_currency_id) }}
  </td>
  <td>
    {{ getPrice(item.purchase_cost_debited, item.purchase_cost_currency_id) }}
  </td>
  <td>{{ formatTime(item.updated_at) }}</td>
</template>

<script lang="ts">
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import { defineComponent } from "vue";

export default defineComponent({
  mixins: [formatValueMinxin],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {},
});
</script>

<style scoped></style>
