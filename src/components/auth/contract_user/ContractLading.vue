<template>
  <div>
    <div class="container" style="max-width: 100%">
      <div class="tracking_register">
        <div class="wrapper" v-if="isNull == false">
          <div class="title">Danh sách vận đơn</div>
          <i class="fa fa-ship" aria-hidden="true"></i>
          <div class="form">
            <div
              style="
                align-items: baseline;

                margin: 20px 0px;
              "
              class="inputfield"
              v-for="(lading, index) in lading_bills"
              :key="index"
            >
              <FieldLadingContract :lading_bill="lading" />
            </div>
          </div>
        </div>
        <div class="wrapper" v-if="isNull == true">
          <span>Chưa có vận đơn</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ladingBillStore } from "@/stores/lading_bills";
import { defineComponent } from "vue";
import FieldLadingContract from "../../output/FieldLadingContract.vue";
import _ from "lodash";
export default defineComponent({
  props: {
    id_contract: {
      type: String,
      required: true,
    },

    order_list: {
      type: Array,
      required: false,
    },
  },

  data() {
    return {
      sw: false as boolean,
    };
  },

  watch: {
    order_list() {
      if (!_.isEmpty(this.order_list)) {
        this.getLading();
      }
    },
  },

  computed: {
    lading_bills() {
      return ladingBillStore().getLading;
    },

    isNull() {
      if (_.isEmpty(this.order_list)) {
        return true;
      } else {
        return false;
      }
    },
  },

  methods: {
    getLading() {
      return ladingBillStore().getLadingBill(this.order_list);
    },
  },

  components: { FieldLadingContract },
});
</script>

<style scoped>
.container {
  padding: 50px 0px 0px 0px !important;
}

.tracking_register .wrapper {
  max-width: 100%;
}

.inputfield {
  padding: 20px;
  border: 1px solid #477a8b;
  background: #f1f2f6;
  border-radius: 8px;
}
.dark_mode .inputfield {
  background: #2f3542;
}
</style>
