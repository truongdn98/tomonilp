<template>
  <TheHeader />

  <main>
    <section id="hero" class="child_hero">
      <h1>
        <span class="en uppercase">{{ title }}</span>
        <span v-if="subtitle" class="ja">{{ subtitle }}</span>
      </h1>
    </section>

    <div
      id="breadcrumbs"
      itemscope=""
      itemtype="http://schema.org/BreadcrumbList"
    >
      <span
        itemprop="itemListElement"
        itemscope=""
        itemtype="http://schema.org/ListItem"
        ><router-link itemprop="item" to="/">
          <span itemprop="name"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="22"
              height="20"
              viewBox="0 0 22 20"
            >
              <image
                id="_192_b_24"
                data-name="192_b_24"
                width="22"
                height="20"
                xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAB8ElEQVQ4jZXUy4uPURgH8M/PuDYuM65NNrKgXCKhLLBwzRTNTkoW7MjlH5CiLCwoWdq4lYiwQCjlUkpRI7LUbNDPdSYT5dLR8+r0zuv3+8233s7znuec73nO83yfU+uY3a0FTMFdjMZG9MX8YyzFd/RjLy4nx4gWSBehF4sxDy+wPHztGIXx6MKmYlMz4i14Hpsu4Swm4gm2xaHJdyzWfyg2jmxAug8nwj6DHWF/wR6cxwwcx8vwdRab28Z2zqkiPYmDYR/C/sx3EwNYjw34iftYjYtxQ+XipdRcRzG5Hef+c6MeXAn7dqTmY05UYGac1h0VXtWANOEqlqAekd/BrDLxiqj2QryK8UED0gLPMB9P45DXWFMQbw09dkSOFuBNC6QF3mMZTofOk953puL1xoLD2I3fwyDNkWoziHXYnIjrka9rcf3P0RDDQWqMGziKh0nnScenguBIdNZaXCiRjsluUosWzrESc6Oldymp4muM9WyuLSTVF9odCPtW+Ap8ivGf3Bp1nngLekpz00Je7VkwQ9DsrcgL2RUt/KPCNwTNIs7xNuxfrSyuingws/sr/LUK37dWIp6AcUGQ3tkCyc6jnR7FTCmZ1Ih4cowH4iujHP27ijVTCyNPxaOQTXoGcyTCnLT8n5Bukt7pe3//8AcvRGla/EoM+QAAAABJRU5ErkJggg=="
              ></image>
            </svg>
            HOME
          </span></router-link
        >
        <meta itemprop="position" content="1"
      /></span>
      <span class="arrow">&gt;</span>
      <span
        itemprop="itemListElement"
        itemscope=""
        itemtype="http://schema.org/ListItem"
        ><router-link
          v-if="currentPageName"
          itemprop="item"
          :to="'/' + subtitle"
        >
          <span class="last uppercase" itemprop="name">{{ title }}</span>
        </router-link>
        <span v-else class="last uppercase" itemprop="name">{{ title }}</span>
      </span>
      <span v-if="currentPageName" class="arrow">&gt;</span>
      <span
        v-if="currentPageName"
        itemprop="itemListElement"
        itemscope=""
        itemtype="http://schema.org/ListItem"
        ><span class="last" itemprop="name">{{ currentPageName }}</span>
        <meta itemprop="position" content="3"
      /></span>
    </div>
    <div style="min-height: 300px; margin-top: 50px" class="container">
      <slot> </slot>
    </div>
  </main>
  <TheFooter />
</template>

<script lang="ts">
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    currentPageName: {
      type: String,
      required: false,
    },
  },
  name: "page-view",
  components: { TheHeader, TheFooter },
});
</script>

<style scoped></style>
