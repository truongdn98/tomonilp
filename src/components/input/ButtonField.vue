<template>
  <div class="inputfield">
    <button :disabled="disabled" class="btn" @click="handleCreate()">
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import _ from "lodash";

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  methods: {
    handleCreate: _.debounce(function (this: any) {
      this.$emit("handleSubmit");
    }, 500),
  },
});
</script>
