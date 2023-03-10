<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>
      {{ item?.created_at == 0 ? "" : formatTime(item.created_at) }}
    </td>
    <td>{{ item?.code_ref }}</td>
    <td>
      <span
        :class="[
          item?.type_id == 'debit-service'
            ? 'label-warning'
            : item?.type_id == 'debit-service-refund'
            ? 'label-primary'
            : 'label-success',
          'label',
        ]"
        >{{ item?.transaction_type.name }}</span
      >
    </td>
    <td>{{ getPrice(item?.amount, currency_id) }}</td>
    <td>{{ item?.object.name }}</td>
    <td>{{ item?.prepared_by.name }}</td>
    <td>{{ item?.card?.name }}</td>
    <td>{{ item?.description }}</td>
    <td>
      {{ item?.updated_at == 0 ? "" : formatTime(item?.updated_at) }}
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatValueMinxin } from "@/mixins/formatValueMixin";

export default defineComponent({
  // props: ["item", "index", "currency_id"],
  props: {
    currency_id: {
      type: String,
      default: "",
      required: false,
    },

    index: {
      type: Number,
      default: 0,
      required: false,
    },

    item: {
      type: Object,
      required: true,
    },
  },
  mixins: [formatValueMinxin],
});
</script>
