<template>
  <div class="calendar_">
    <DatePicker
      v-model="date"
      :model-config="modelConfig"
      :isRange="true"
      :locale="locale"
      :popover="{ visibility: 'click' }"
    />
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  props: {
    filter_date: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      locale: {
        id: "vi",
      },
      modelConfig: {
        type: "number",
      },
      date: new Date(),
    };
  },
  watch: {
    date(filter_date) {
      this.$emit("update:filter_date", filter_date);
    },
  },
  components: { },
});
</script>
