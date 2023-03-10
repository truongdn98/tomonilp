<template>
  <div class="wrapper">
    <div class="title">Thông tin vận đơn</div>
    <div class="content_lading-">
      <div
        class="wrap_lading"
        v-for="(lading_bill, index) in getLadings"
        :key="index"
      >
        <FieldLadingContract :lading_bill="lading_bill" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import _ from "lodash";
import { formatValueMinxin } from "@/mixins/formatValueMixin";
import FieldLadingContract from "@/components/output/FieldLadingContract.vue";
import { ladingBillStore } from "@/stores/lading_bills";

export default defineComponent({
  mixins: [formatValueMinxin],
  data() {
    return {
      isShow: false as boolean,
    };
  },

  computed: {
    getLadings() {
      return ladingBillStore().getLading;
    },
  },

  components: { FieldLadingContract },
});
</script>

<style scoped>
.wrap_lading {
  border: 2px solid #fca901;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #f8f8ff;
  display: flex;
}

.wrapper {
  margin-top: 50px !important;
  height: 800px;
  overflow-y: auto;
  max-width: 100% !important;
}

label,
p {
  font-size: 18px !important;
}
</style>
