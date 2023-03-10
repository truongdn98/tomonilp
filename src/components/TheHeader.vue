<template>
  <header id="header">
    <nav class="style_nav">
      <h1 class="logo style_logo">
        <router-link to="/home"
          ><img src="@/assets/img/logo.png" alt="AWOND"
        /></router-link>
      </h1>
      <div class="inner pc">
        <ul class="style_menu">
          <li class="hover_effect" v-for="nav in menu" :key="nav.id">
            <router-link :to="nav.to">
              <div class="box">
                <div class="uppercase">{{ nav.id }}</div>
                <div class="uppercase">{{ nav.name }}</div>
              </div>
            </router-link>
            <ul v-if="nav.child" class="child_list animated fadeInDown">
              <li
                class="hover_effect uppercase"
                v-for="child in nav.child"
                :key="child.id"
              >
                <a :to="child.to">{{ child.name }}</a>
              </li>
            </ul>
          </li>
          <li class="style_contact">
            <router-link to="/contact/">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.492"
                  height="12.707"
                >
                  <g
                    data-name="Group 116"
                    fill="none"
                    stroke="#fff"
                    stroke-width=".5"
                  >
                    <path
                      data-name="Path 48"
                      d="M9.495 7.242L17.126.459a.537.537 0 00-.423-.209H.79a.536.536 0 00-.423.209l7.63 6.783a1.124 1.124 0 001.498 0z"
                    ></path>
                    <path
                      data-name="Path 49"
                      d="M9.73 7.506a1.477 1.477 0 01-1.969 0L6.538 6.419.555 12.402a.532.532 0 00.234.056h15.913a.532.532 0 00.234-.056l-5.983-5.983z"
                    ></path>
                    <path
                      data-name="Path 50"
                      d="M.25.825v11.089a.534.534 0 00.055.234L6.273 6.18z"
                    ></path>
                    <path
                      data-name="Path 51"
                      d="M17.187 12.152a.532.532 0 00.056-.234V.825L11.219 6.18z"
                    ></path>
                  </g>
                </svg>
              </span>
              <span>LIÊN HỆ</span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div
      id="fixed_header"
      class="global_nav pc"
      style="opacity: 0; top: -100px"
    >
      <nav class="style_nav">
        <h1 class="logo style_logo">
          <router-link to="/home"
            ><img src="@/assets/img/logo.png" alt="AWOND"
          /></router-link>
        </h1>
        <div class="inner">
          <ul class="style_menu">
            <li class="hover_effect" v-for="nav in menu" :key="nav.id">
              <router-link :to="nav.to">
                <div class="box">
                  <div class="uppercase">{{ nav.name }}</div>
                  <ul v-if="nav.child" class="child_list animated fadeInDown">
                    <li
                      class="hover_effect uppercase"
                      v-for="child in nav.child"
                      :key="child.id"
                    >
                      <a :to="child.to">{{ child.name }}</a>
                    </li>
                  </ul>
                </div>
              </router-link>
            </li>
            <li class="style_contact">
              <router-link to="/contact/">
                <span
                  ><svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 14 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
                    ></path></svg
                ></span>
                <span>LIÊN HỆ</span>
                <span
                  ><svg
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
                    ></path></svg
                ></span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div
      class="triger_wrap bar_effect6 sp"
      @click="showMobileNav = !showMobileNav"
    >
      <div class="menu-trigger" :class="{ active: showMobileNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </header>
  <nav
    class="mobilenav animated fadeIn"
    :style="{ display: showMobileNav ? 'block' : 'none' }"
  >
    <ul>
      <li class="animated fadeInUp" v-for="nav in menu" :key="nav.id">
        <router-link :to="nav.to">
          <div class="uppercase">{{ nav.name }}</div>
        </router-link>
      </li>

      <li class="contact animated fadeInUp">
        <a href="/contact/">
          <span
            ><svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 14 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"
              ></path></svg
          ></span>
          <span>LIÊN HỆ</span>
          <span
            ><svg
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
              ></path></svg
          ></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      showMobileNav: false,
      menu: [
        { id: "home", name: "Trang chủ", to: "/" },
        { id: "about  ", name: "Về chúng tôi", to: "/about-us" },
        {
          id: "services",
          name: "Dịch vụ",
          to: "/services",
          child: [{ id: "achievements", name: "Thành tích", to: "/" }],
        },
        { id: "news", name: "Tin tức", to: "/news" },
      ],
    };
  },
  mounted() {
    let flag = "view" as string;
    window.onscroll = () => {
      const scroll = (window?.top?.scrollY as number) || 0;
      const element = document.querySelector("#fixed_header") as any;
      if (scroll > 300) {
        element.style.opacity = "1.0";
        element.style.top = "0";
        flag = "hide";
      } else {
        if (flag === "hide") {
          element.style.top = "-200px";
          flag = "view";
        }
      }
    };
  },
  computed: {},
  methods: {},
});
</script>

<style scoped>
.shop-menu ul li a {
  background: none;
}
.style_nav {
  display: flex;
  align-items: center;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0px 0 0px;
  justify-content: space-between;
}
.style_logo {
  display: flex;
  margin: 0;
  align-items: center;
  width: 140px;
}
.style_nav a {
  color: #000;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
}
.pc {
  display: block;
}
.style_menu {
  display: flex;
  justify-content: space-between;
  padding: 0px 16px;
  margin: 0 0 0 auto;
}
li,
ul {
  list-style: none;
}
#header li:hover ul {
  display: block;
}
#fixed_header.global_nav .hover_effect:hover ul {
  display: block !important;
  top: 43px;
}
.style_menu > li {
  display: flex;
  position: relative;
  /* padding: 0 25px; */
}
.style_menu li a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
}

.style_nav a {
  color: #000;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
}
.style_menu li a .box {
  border-left: 1px solid #000;
  padding: 0 30px;
}
.style_menu li a .box div:first-child {
  font-family: var(--font-helvetica);
  font-style: italic;
  font-size: 1.2rem;
  margin: 0 0 4px;
  font-weight: 700;
  letter-spacing: 0px;
  text-align: center;
}
li.style_contact {
  display: flex;
  align-items: center;
  justify-content: center;
}

li.style_contact a {
  color: #fff;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background-color: var(--secondary-main-color);
  height: 42px;
  border: 1px solid var(--secondary-main-color);
  transition: 0.4s;
}

@media screen and (max-width: 600px) {
  .header-bottom {
    position: absolute;
  }
}
</style>
