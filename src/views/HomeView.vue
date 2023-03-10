<script lang="ts">
import Home from "./page/Home.vue";
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
  name: "Home-template",
  components: {
    TheHeader,
    TheFooter,
    Home,
  },
};
</script>
<template>
  <TheHeader></TheHeader>
  <Home />
  <TheFooter></TheFooter>
</template>
