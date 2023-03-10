<template>
  <footer class="style_footer" id="footer">
    <div class="style_pageTop"><a href="#"></a></div>
    <div class="style_footerTop">
      <div class="style_container">
        <h1>
          <img src="@/assets/img/awond-logo.png" alt="footer logo" />
        </h1>
        <div class="style_links">
          <div>
            <h2>VỀ CHÚNG TÔI</h2>
            <ul>
              <li>Công ty TNHH Awond Logistics</li>
              <li>321-0158 Tochigi, Utsunomiya, Nishikawatamotocho 2-1-1</li>
              <li>Điện thoại: (+81) 28-680-5696</li>
            </ul>
          </div>
          <div>
            <h2>CÁC DỊCH VỤ</h2>
            <ul>
              <li>
                <router-link to="/services/service-1/">Chiến lược</router-link>
              </li>
              <li>
                <router-link to="/services/service-2/">Dịch vụ</router-link>
              </li>
              <li>
                <router-link to="/services/service-3/"
                  >Hoạt động của các cửa hàng
                </router-link>
              </li>
              <li>
                <router-link to="/services/service-4/"
                  >Hỗ trợ hậu cần
                </router-link>
              </li>
              <li>
                <router-link to="/services/service-1/"
                  >Tìm kiếm các đối tác tại Nhật</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="style_footerBottom">
      <div class="style_container">
        <div class="style_help">
          <router-link to="/contact">LIÊN HỆ</router-link>
          <!-- <a href="/privacy-policy/">プライバシーポリシー</a>
          <a href="/personal/">採用応募者の個人情報の取扱い</a> -->
        </div>
        <small>Copyright(C) AWOND All Rights Reserved.</small>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#footer ul {
  padding-inline-start: 0px;
}
#footer {
  color: #fff;
  position: relative;
}

#footer .style_pageTop {
  position: absolute;
  width: 100%;
  text-align: center;
  top: -40px;
  display: flex;
  justify-content: center;
}

#footer .style_pageTop a {
  display: block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 45px 40px 45px;
  border-color: transparent transparent var(--secondary-main-color) transparent;
}

#footer .style_pageTop a:hover {
  opacity: 1;
}

#footer .style_container {
  max-width: var(--container-width);
  margin: 0 auto;
}

#footer .style_footerTop {
  background-color: var(--secondary-main-color);
  padding: 80px 0;
}

#footer .style_footerTop > div {
  display: flex;
  align-items: center;
}

#footer .style_footerTop h1 {
  margin-right: auto;
  width: 180px;
}

#footer .style_links {
  display: flex;
}

#footer .style_links h2 {
  font-size: 1.6rem;
  font-weight: 400;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  border-bottom: 2px solid #fff;
}

/* #footer .style_links > div {
  width: 180px;
} */

#footer .style_links a {
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  display: block;
  padding: 2px 0;
}

#footer .style_links li + li {
  margin-top: 4px;
}

#footer .style_footerBottom {
  background-color: #939393;
}

#footer .style_footerBottom > div {
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

#footer .style_help a {
  color: #fff;
  font-size: 1.2rem;
}

#footer .style_help a + a {
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid var(--mono-50);
}

#footer .style_footerBottom small {
  font-family: var(--font-helvetica);
  color: #ffffff;
  font-size: 1.2rem;
}
</style>
