<template>
  <Page title="Tin tức" subtitle="News">
    <section class="">
      <div>
        <div class="page_wrap" style="position: relative">
          <div class="inner">
            <ul class="entries">
              <li v-for="post in postsPaginate" :key="post.id">
                <router-link :to="'/news/' + post.href">
                  <figure>
                    <img :src="post.img" alt="" class="post-img" />
                    <p class="date">{{ post.date }}</p>
                  </figure>
                  <div class="exp">
                    <!-- <p class="meta">{{ post.date }}</p> -->
                    <h2 class="post-title">
                      {{ post.name }}
                    </h2>
                    <p class="excerpt pc">
                      {{ post.description }}
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
            <div class="wp-pagenavi" role="navigation">
              <router-link
                v-if="currentPage > 1"
                class="previouspostslink"
                rel="prev"
                to="/news/"
                @click="currentPage -= 1"
              >
                &lt;
              </router-link>
              <router-link
                v-for="(page, index) in paginate"
                :key="index"
                class="page larger"
                :class="page == currentPage ? 'current' : ''"
                title="Page 2"
                :to="'/news?page=' + page"
                @click="changePage(page)"
                >{{ page }}</router-link
              >
              <router-link
                v-if="currentPage < pageTotal"
                class="nextpostslink"
                rel="next"
                to="/news/"
                @click="currentPage += 1"
              >
                &gt;</router-link
              >
            </div>
          </div>
          <aside
            class="sidebar frix"
            data-frix-min-width="768"
            data-frix-scroll-margin-top="70"
            style="width: 294px; position: static"
          >
            <section class="cat">
              <h3>DANH MỤC</h3>
              <div class="links">
                <router-link to="/news">Tin tức</router-link>
                <!-- <a href="">Blog</a> -->
              </div>
            </section>

            <!-- <section class="archives">
              <h3>LƯU TRỮ</h3>
              <div class="accordion links">
                <div class="year"><a class="open_month">2023</a></div>
              </div>
            </section> -->
          </aside>
        </div>
      </div>
    </section>
  </Page>
</template>

<script lang="ts">
import Page from "../../components/Page.vue";
import { usePostsStore } from "@/store/posts";
export default {
  name: "news-view",
  components: { Page },
  data() {
    return {
      currentPage: 1,
      itemPerPage: 2,
      maxVisibleButtons: 5,
    };
  },
  computed: {
    router() {
      return this.$route;
    },
    posts() {
      return usePostsStore().list;
    },
    postsPaginate() {
      return this.posts.slice(
        this.itemPerPage * (this.currentPage - 1),
        this.itemPerPage * this.currentPage
      );
    },
    pageTotal() {
      return Math.round(this.posts.length / this.itemPerPage);
    },
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.pageTotal) {
        return this.pageTotal - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.pageTotal
      );
    },
    paginate() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        if (i > 0) range.push(i);
      }
      return range;
    },
  },
  methods: {
    changePage(page: number) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.post-title {
  margin: 0;
}
.nextpostslink,
.previouspostslink {
  background: var(--mono-50);
  text-align: center;
  padding: 6px 12px;
  color: #fff;
  border-radius: 100px;
  width: 30px;
  height: 30px;
}
</style>
