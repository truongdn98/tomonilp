<template>
  <div class="inputfield">
    <label>{{ label }}</label>
    <div class="rad_wrap">
      <input
        checked
        type="radio"
        class="rad_register"
        :name="name"
        :value="value1"
        v-model="model"
      />
      <label class="rad_name">{{ label1 }}</label>
    </div>
    <div class="rad_wrap">
      <input
        type="radio"
        class="rad_register"
        :name="name"
        :value="value2"
        v-model="model"
      />
      <label class="rad_name">{{ label2 }}</label>
    </div>
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
    value1: {
      type: String,
      required: true,
      default: "",
    },

    value2: {
      type: String,
      required: true,
      default: "",
    },

    label: {
      type: String,
      required: true,
      default: "",
    },

    label1: {
      type: String,
      required: true,
      default: "",
    },

    label2: {
      type: String,
      required: true,
      default: "",
    },
    name: {
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
