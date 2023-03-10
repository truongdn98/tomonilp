<template>
  <Page title="Liên hệ chúng tôi"> </Page>
</template>

<script lang="ts">
import Page from "../../components/Page.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "contract-view",
  components: { Page },
  computed: {
    contactLink() {
      const contact = {
        zaloId: import.meta.env.VITE_APP_ZALO_ID,
        facebookId: import.meta.env.VITE_APP_FACEBOOK_PAGE,
        viberId: import.meta.env.VITE_APP_VIBER_ID,
      };
      return contact;
    },
  },
});
</script>

<style scoped></style>
