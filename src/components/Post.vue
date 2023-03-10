<template>
  <Page title="TIN TỨC" subtitle="News" :currentPageName="postName">
    <div class="inner">
      <article id="detail">
        <div class="meta">
          <p class="date">{{ postDate }}</p>
        </div>
        <h1 class="title">{{ postName }}</h1>

        <div class="content">
          <slot></slot>
        </div>
        <div class="style_button">
          <router-link to="/news/">
            <span>Xem bài viết khác</span>
            <span class="style_arrow">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"
                ></path>
              </svg>
            </span>
          </router-link>
        </div>
      </article>
    </div>
  </Page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Page from "./Page.vue";

export default defineComponent({
  name: "post-view",
  props: {
    postName: {
      type: String,
      required: false,
    },
    postDate: {
      type: String,
      required: false,
    },
  },
  components: { Page },
});
</script>

<style scoped></style>
