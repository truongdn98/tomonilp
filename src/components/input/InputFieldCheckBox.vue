<template>
  <div class="inputfield terms">
    <label class="check">
      <input id="checkbox" type="checkbox" v-model="model" />
      <span class="checkmark"></span>
    </label>
    <p>{{ label }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
    label: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      model: "false" as any,
    };
  },
  watch: {
    model(value: string) {
      this.$emit("update:value", value);
    },
  },
});
</script>
