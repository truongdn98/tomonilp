<template>
  <Page title="Về chúng tôi" subtitle="AWOND - Asean Way on demand">
    <div class="img">
      <img
        src="https://grooveinc.jp/wp-content/uploads/2021/11/shugooo2.jpg"
        alt=""
      />
    </div>
    <section class="person">
      <div class="container">
        <h2 class="person__title">GIỚI THIỆU</h2>
        <ul class="person__list">
          <li class="person__list-item1">
            <div class="person__list-desc-wrap">
              <!-- <h3 class="person__list-subtitle">CEO/Founder</h3> -->
              <h2 class="person__list-title">AWOND</h2>
              <p class="person__list-desc">
                321-0158 Tochigi, Utsunomiya, Nishikawatamotocho 2-1-1 <br />
                Hotline: (+81) 28-680-5696
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </Page>
</template>

<script lang="ts">
import Page from "../../components/Page.vue";
export default {
  name: "about-view",
  components: { Page },
};
</script>
<style scoped>
/* Person */

.person {
  padding-top: 40px;
  padding-bottom: 80px;
}
.person .container {
  max-width: 914px;
}
.person__title {
  font-size: 2.4rem;
  line-height: 2.8rem;
  font-weight: 700;
  color: #111111;
  text-align: center;
  padding-bottom: 15px;
  position: relative;
}

.person__title:after {
  content: "";
  display: block;
  width: 127px;
  height: 3px;
  background-color: #f8b62d;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.person__list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -20px;
  margin-right: -20px;
}

.person__list-item {
  display: flex;
  width: 50%;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 45px;
}

.person__list-img-wrap {
  max-width: 200px;
  flex: 1 0 auto;
}

.person__list-img {
  background-color: black;
  display: block;
  width: 100%;
  height: 0;
  position: relative;
  padding-bottom: calc(250 / 200 * 100%);
}

.person__list-img img {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: 50% 50%;
}

/* .person__list-desc-wrap {
  width: calc(100% - 200px);
  padding-left: 20px;
} */

.person__list-subtitle {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: var(--main-color);
}

.person__list-title {
  line-height: 2.6rem;
  color: var(--main-color);
  margin-top: 10px;
  font-size: 2.25rem;
  font-weight: 600;
}

.person__list-desc {
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 20px;
}

@media screen and (max-width: 736px) {
  .person__list {
    display: block;
    margin-left: 0;
    margin-right: 0;
  }

  .person__list-item {
    width: 100%;
    display: block;
    padding-left: 0;
    padding-right: 0;
  }

  .person__list-img-wrap {
    max-width: initial;
    width: 100%;
  }

  .person__list-desc-wrap {
    width: 100%;
    padding-top: 20px;
    padding-left: 0;
  }
}
</style>
