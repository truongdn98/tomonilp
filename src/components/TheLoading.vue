<template>
  <div class="loading_wrap" v-if="sw">
    <div id="showloading" class="loading__container">
      <div class="loadingBx">
        <div class="loading"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    sw: {
      default: false,
      type: Boolean,
      required: true,
    },
  },
});
</script>
