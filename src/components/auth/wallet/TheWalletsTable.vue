<template>
  <td style="padding-left: 20px">{{ wallet?.id }}</td>
  <td>
    <span
      :class="[
        wallet?.walletable_type == 'user' ? 'label-success' : 'label-primary',
        'label',
      ]"
      >{{
        wallet?.walletable_type == "user"
          ? "Ví khách hàng"
          : wallet?.walletable_type
      }}</span
    >
  </td>
  <td>
    <span
      :class="[
        wallet?.currency_id == 'VND' ? 'label-danger' : 'label-warning',
        'label',
      ]"
      >{{ wallet?.currency_id }}</span
    >
  </td>
  <td>
    <span
      :class="[
        wallet?.organization_id == 'se' ? 'label-saiko' : 'label-primary',
        'label',
      ]"
      >{{ wallet?.organization_id }}</span
    >
  </td>
  <td>
    {{ getPrice(wallet?.amount_available_for_payment, wallet?.currency_id) }}
  </td>
  <td>
    {{ getPrice(wallet?.balance, wallet?.currency_id) }}
  </td>
  <td>{{ formatTime(wallet?.updated_at) }}</td>
</template>

<script lang="ts">
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import { defineComponent } from "vue";

export default defineComponent({
  mixins: [formatValueMinxin],
  props: {
    wallet: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {};
  },
});
</script>

<style scoped>
.label {
  padding: 5px 10px;
}
</style>
