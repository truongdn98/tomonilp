<template>
  <div id="popup_form" class="tracking_register">
    <div class="wrapper wrapper_up">
      <p @click="close()">X</p>
      <div class="title">{{ label }}</div>
      <div class="form">
        <OutputField label="Tên người gửi" :value="name" />
        <OutputField label="SĐT người gửi" :value="tel" />
        <OutputField label="Tên Địa chỉ" :value="address" />
        <OutputField label="Ghi chú" :value="note" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OutputField from "@/components/output/OutputField.vue";

export default defineComponent({
  props: ["label", "address", "tel", "name", "note"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
  components: { OutputField },
});
</script>

<style scoped>
.wrapper p {
  cursor: pointer;
  color: #fca901;
  float: right;
}

.wrapper p:hover {
  color: red;
}
</style>
