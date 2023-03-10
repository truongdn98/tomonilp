<template>
  <div class="inputfield">
    <label>{{ label }}</label>
    <textarea class="textarea" v-model="model"></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
      default: "",
    },
    label: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      model: "",
    };
  },
  watch: {
    model(value) {
      this.$emit("update:value", value);
    },
  },
});
</script>
