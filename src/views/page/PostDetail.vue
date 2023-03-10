<template>
  <Post title="Tin tức" :postName="posts.name"> ds </Post>
</template>

<script lang="ts">
import Post from "../../components/Page.vue";
import { usePostsStore } from "@/store/posts";
export default {
  name: "news-view",
  components: { Post },
  computed: {
    id() {
      return this.$route.name;
    },
    posts() {
      return usePostsStore().list.find((x) => x.href == this.id);
    },
  },
};
</script>
