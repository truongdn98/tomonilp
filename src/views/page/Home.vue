<template>
  <section class="hero">
    <div class="hero__video-wrap" id="video-wrap">
      <video
        id="video-pc"
        class="hero__video-media hero__video-media--pc"
        autoplay=""
        loop=""
        muted=""
        playsinline=""
        preload="yes"
      >
        <source
          src="https://grooveinc.jp/wp-content/themes/groove/assets/img/video/index1-pc.mp4"
          type="video/mp4"
        />
        <source
          src="https://grooveinc.jp/wp-content/themes/groove/assets/img/video/index1-pc.ogv"
          type="video/ogv"
        />
        <source
          src="https://grooveinc.jp/wp-content/themes/groove/assets/img/video/index1-pc.webm"
          type="video/webm"
        />
      </video>
    </div>

    <div class="hero__inner">
      <h1 class="hero-subtitle">
        <span class="hero-subtitle-inner"
          >AWOND
          <span class="hero-subtitle-inner_yellow"
            >Asean Way on demand</span
          ></span
        >
        <span class="hero-subtitle-sub"
          >Những điều cần thiết cho việc mở rộng ra nước ngoài</span
        >
      </h1>
      <h2 class="hero__title anim-title visible">
        <span class="hero__title-inner"
          >Thành công và Thất bại của Doanh nghiệp Nhật Bản</span
        >
      </h2>
      <h2 class="hero__title anim-title visible">
        <span class="hero__title-inner"
          >trong việc mở rộng đầu tư ở nước ngoài.</span
        >
      </h2>
      <p class="hero__desc">
        Awond, kết nối các doanh nghiệp Nhật bản với các<br />
        doanh nghiệp nước ngoài. Có hoạt động và tiếp thị độc đáo <br />
        Với quy mô hàng chục công ty và các công ty liên kết<br />
      </p>
      <router-link to="/services/" class="hero__btn"
        >Tìm hiểu dịch vụ</router-link
      >
    </div>
  </section>
  <section class="news">
    <div class="container">
      <h2 class="main-title">TIN TỨC CỦA CHÚNG TÔI</h2>
      <div class="news__list-wra">
        <Carousel :settings="settings" :breakpoints="breakpoints">
          <Slide v-for="post in posts" :key="post.id">
            <router-link :to="'/news/' + post.href">
              <div class="post-wrap">
                <div class="post-item-wrap" data-v-cfb0886d="">
                  <div class="post-item-img" data-v-cfb0886d="">
                    <img :src="post.img" :alt="post.href" data-v-cfb0886d="" />
                  </div>
                  <h3 class="post-item-title" data-v-cfb0886d="">
                    {{ post.name }}
                  </h3>
                  <div class="post-item-content-wrap" data-v-cfb0886d="">
                    <p class="post-item-content" data-v-cfb0886d="">
                      {{ post.description }}
                    </p>
                  </div>
                </div>
              </div>
            </router-link>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
        <p class="news__note">
          <router-link to="/news/" class="view-all__btn" data-v-cfb0886d=""
            >Xem tất cả</router-link
          >
        </p>
      </div>
    </div>
  </section>
  <section class="why-us">
    <div class="container">
      <div class="why-us__wrap">
        <div class="why-us__inner">
          <div class="why-us__img">
            <img
              src="https://grooveinc.jp/wp-content/themes/groove/assets/img/index/why_us_img.png"
              alt="image description"
            />
          </div>
        </div>
        <div class="why-us__inner">
          <h2 class="why-us__title">
            <span class="why-us__title-inner">Tại sao lại chọn AWOND?</span>
          </h2>
          <p class="why-us__desc">
            「Công ty chúng tôi có kinh nghiệm hơn 10 năm trong lĩnh vực vận
            chuyển quốc tế」<br />
            「Với quy mô hàng chục công ty con và công ty liên doanh liên
            kết」<br />
            「Kinh nghiệm mở shop tại các trang EC lớn ở Nhật Bản」<br />
            「Nhanh chóng, tiết kiệm, đảm bảo an toàn cho khách hàng」<br />
            「Ngoài ra còn cung cấp các dịch vụ khác như mua hộ, đặt hàng và
            ship COD」<br />
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="area">
    <div class="container">
      <h2 class="main-title">CHUYÊN MÔN CỦA CHÚNG TÔI</h2>
      <p class="area__desc">
        Với những thế mạnh mà chúng tôi mang đến, chúng tôi
        <br />
        sẵn sàng hỗ trợ bạn xây dựng và phát triển<br />
      </p>
      <div class="area__list-wrap">
        <ul class="area__list">
          <li
            class="area__list-item animated fadeInUp"
            data-animes="fade-up"
            data-animes-delay="2000"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="area__list-item-inner">
              <h3 class="area__list-title">Mở rộng ra nước ngoài</h3>
              <div class="area__list-desc-wrap">
                <p class="area__list-desc">
                  Chúng tôi luôn hỗ trợ mở rộng ra nước ngoài.Đồng thời phía
                  chúng tôi không chỉ hỗ trợ lập kế hoạch chiến lược mà còn hỗ
                  trợ xây dựng hoạt động như hậu cần và hỗ trợ khách hàng.
                </p>
                <div class="area__list-img nth-1">
                  <img
                    src="https://grooveinc.jp/wp-content/uploads/2020/07/6.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li
            class="area__list-item animated fadeInUp"
            data-animes="fade-up"
            data-animes-delay="2000"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="area__list-item-inner">
              <h3 class="area__list-title">Lên kế hoạch thực hiện</h3>
              <div class="area__list-desc-wrap">
                <p class="area__list-desc">
                  Kiểm soát hàng hóa và có khả năng vận chuyển quốc tế
                </p>
                <div class="area__list-img nth-2">
                  <img
                    src="https://grooveinc.jp/wp-content/uploads/2020/07/5.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li
            class="area__list-item animated fadeInUp"
            data-animes="fade-up"
            data-animes-delay="200"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="area__list-item-inner">
              <h3 class="area__list-title">Tư vấn cải thiện</h3>
              <div class="area__list-desc-wrap">
                <p class="area__list-desc">
                  Bằng cách sử dụng kiến thức sâu rộng của mình về kinh doanh
                  ,chúng tôi hỗ trợ chiến lược, thiết kế và lập kế hoạch cho
                  hoạt động kinh doanh.
                </p>
                <div class="area__list-img nth-3">
                  <img
                    src="https://grooveinc.jp/wp-content/uploads/2020/07/4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li
            class="area__list-item animated fadeInUp"
            data-animes="fade-up"
            data-animes-delay="300"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="area__list-item-inner">
              <h3 class="area__list-title">Khuyến mãi bán hàng</h3>
              <div class="area__list-desc-wrap">
                <p class="area__list-desc">
                  Chúng tôi cung cấp hỗ trợ toàn diện cho việc lập kế hoạch
                  chiến lược, lập kế hoạch sản phẩm và vận hành cửa hàng cho
                  khách hàng thuộc nhiều loại hình kinh doanh khác nhau như nhà
                  sản xuất, nhà bán sỉ và lẻ .
                </p>
                <div class="area__list-img nth-4">
                  <img
                    src="https://grooveinc.jp/wp-content/uploads/2020/07/1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li
            class="area__list-item animated fadeInUp"
            data-animes="fade-up"
            data-animes-delay="400"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="area__list-item-inner">
              <h3 class="area__list-title">Tạo thành tích bán hàng</h3>
              <div class="area__list-desc-wrap">
                <p class="area__list-desc">
                  Đối với những nhà sản xuất muốn sử dụng thành tích EC của họ
                  trong các kênh bán hàng khác như ngoại tuyến, chúng tôi cung
                  cấp các chiến lược để có được những sản phẩm bán chạy nhất
                  trong thời gian ngắn nhất.
                </p>
                <div class="area__list-img nth-5">
                  <img
                    src="https://grooveinc.jp/wp-content/uploads/2020/07/3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
          <li
            class="area__list-item animated fadeInUp"
            data-animes="fade-up"
            data-animes-delay="500"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="area__list-item-inner">
              <h3 class="area__list-title">Khởi động doanh nghiệp D2C</h3>
              <div class="area__list-desc-wrap">
                <p class="area__list-desc">
                  Chúng tôi hỗ trợ triển khai hoạt động kinh doanh D2C. Đối với
                  thị trường nơi là thế mạnh của công ty khách hàng thì chúng
                  tôi tiến hành khảo sát và hỗ trợ nhất quán từ việc lựa chọn
                  sản phẩm, tiếp thị và xây dựng hoạt động.
                </p>
                <div class="area__list-img nth-6">
                  <img
                    src="https://grooveinc.jp/wp-content/uploads/2020/07/2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="services">
    <div class="container">
      <h2 class="services__title">DỊCH VỤ CỦA CHÚNG TÔI</h2>
      <p class="services__desc">
        Chúng tôi mang đến những dịch vụ tốt nhất nhầm hỗ trợ cho việc hoạt
        động<br />
        vận chuyển của bạn trở nên dễ dàng và thuận tiện<br />
      </p>
      <div class="services__list-wrap">
        <ul class="services__list">
          <li
            class="services__list-item animated fadeInUp"
            data-animes="fade-up"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="services__list-item-inner">
              <div class="services__list-img">
                <img
                  src="https://grooveinc.jp/wp-content/uploads/2020/07/service1.png"
                  alt=""
                />
              </div>
              <span class="services__list-note">Strategic Planning</span>
              <h3 class="services__list-title">Chiến lược</h3>
              <p class="services__list-desc">
                Chúng tôi cung cấp các chiến lược cần thiết cho sự thành công
                của doanh nghiệp , chẳng hạn như nắm bắt môi trường kinh doanh
                như nghiên cứu thị trường và phân tích cạnh tranh, trích xuất
                thông tin chi tiết về người tiêu dùng , phân tích đánh giá và
                hành trình trải nghiệm của khách hàng cũng như các thiết kế khác
                nhau như xây dựng KPI và kế hoạch kinh doanh.
              </p>
              <div class="services__list-btn-wrap">
                <router-link
                  to="/services/service-1"
                  class="services__list-btn"
                >
                  <span class="services__list-btn-icon"></span>
                  <span class="services__list-btn-inner">Xem chi tiết</span>
                </router-link>
              </div>
            </div>
          </li>

          <li
            class="services__list-item animated fadeInUp"
            data-animes="fade-up"
            data-animes-delay="100"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="services__list-item-inner">
              <div class="services__list-img">
                <img
                  src="https://grooveinc.jp/wp-content/uploads/2020/07/service2.png"
                  alt=""
                />
              </div>
              <span class="services__list-note">Service</span>
              <h3 class="services__list-title">Dịch vụ</h3>
              <p class="services__list-desc">
                Tiến hành mở các shop mua hộ trên các trang EC tại nhật như
                Amazon, Rakuten, Yahoo shopping .
              </p>
              <div class="services__list-btn-wrap">
                <router-link
                  to="/services/service-2"
                  class="services__list-btn"
                >
                  <span class="services__list-btn-icon"></span>
                  <span class="services__list-btn-inner">Xem chi tiết</span>
                </router-link>
              </div>
            </div>
          </li>

          <li
            class="services__list-item animated fadeInUp"
            data-animes="fade-up"
            data-animes-delay="200"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="services__list-item-inner">
              <div class="services__list-img">
                <img
                  src="https://grooveinc.jp/wp-content/uploads/2020/07/service3.png"
                  alt=""
                />
              </div>
              <span class="services__list-note">Operation Management</span>
              <h3 class="services__list-title">Hoạt động của các cửa hàng</h3>
              <p class="services__list-desc">
                Tiến hành đảm nhiệm toàn bộ các hoạt động, từ việc phân tích dữ
                liệu khách hàng như doanh số hàng ngày, các đối sách SEO, đến
                việc xây dựng các hệ thống vận hành như quản lý hàng tồn kho và
                hỗ trợ khách hàng.
              </p>
              <div class="services__list-btn-wrap">
                <router-link
                  to="/services/service-3"
                  class="services__list-btn"
                >
                  <span class="services__list-btn-icon"></span>
                  <span class="services__list-btn-inner">Tìm hiểu thêm</span>
                </router-link>
              </div>
            </div>
          </li>

          <li
            class="services__list-item animated fadeInUp"
            data-animes="fade-up"
            data-animes-delay="300"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="services__list-item-inner">
              <div class="services__list-img">
                <img
                  src="https://grooveinc.jp/wp-content/uploads/2020/07/service4.png"
                  alt=""
                />
              </div>
              <span class="services__list-note">Logistics support</span>
              <h3 class="services__list-title">Hỗ trợ hậu cần</h3>
              <p class="services__list-desc">
                Giảm chi phí vận chuyển khi giao hàng đến kho hoặc vận chuyển .
                Điều quan trọng nữa là hợp tác với bộ phận hậu cần liên quan đến
                khu vực CRM, chẳng hạn như các mặt hàng đi kèm. Chúng tôi cũng
                có thể giới thiệu các đối tác kinh doanh chuyên về hậu cần.
              </p>
              <div class="services__list-btn-wrap">
                <router-link
                  to="/services/service-4"
                  class="services__list-btn"
                >
                  <span class="services__list-btn-icon"></span>
                  <span class="services__list-btn-inner">Tìm hiểu thêm</span>
                </router-link>
              </div>
            </div>
          </li>

          <li
            class="services__list-item animated fadeInUp"
            data-animes="fade-up"
            data-animes-delay="400"
            style="transform: translateY(0px); opacity: 1"
          >
            <div class="services__list-item-inner">
              <div class="services__list-img">
                <img
                  src="https://grooveinc.jp/wp-content/uploads/2020/07/service5.png"
                  alt=""
                />
              </div>
              <span class="services__list-note">Seeking partner</span>
              <h3 class="services__list-title">
                Dịch vụ tìm kiếm các đối tác tại Nhật
              </h3>
              <p class="services__list-desc">
                Lập kế hoạch chi tiết tìm kiếm khách hàng tiềm năng<br />
                Tìm khách hàng qua báo chí<br />
                Hội chợ, triển lãm đem đến nguồn khách hàng tiềm năng<br />
                Tham dự các buổi hội thảo<br />
                Cho khách hàng tiềm năng dùng thử sản phẩm<br />
                Quảng cáo qua các kênh online<br />
                Tìm kiếm khách hàng qua telesale
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="contact">
    <div class="container">
      <h2 class="contact__title">LIÊN HỆ VỚI CHÚNG TÔI</h2>
      <p class="contact__desc">
        Vui lòng liên hệ với chúng tôi để được tư vấn chi tiết dịch vụ<br
          class="sm"
        />
      </p>
      <router-link to="/contact" class="contact__btn">
        <span class="contact__btn-desc">Hỗ trợ mọi lúc</span>
        <span class="contact__btn-mark">Liên hệ ngay</span>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { usePostsStore } from "@/store/posts";

export default {
  name: "Home-app",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      settings: {
        itemsToShow: 3,
        snapAlign: "center",
        autoplay: 3500,
        transition: 1000,
        pauseAutoplayOnHover: true,
        wrapAround: true,
      },
      breakpoints: {
        300: {
          itemsToShow: 1,
        },
        900: {
          itemsToShow: 3,
        },
      },
    };
  },
  computed: {
    posts() {
      return usePostsStore().list;
    },
  },
};
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  min-height: 690px;
  background-color: #f1f1f1;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.hero__video-wrap {
  width: 100%;
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: 1;
  padding-bottom: calc(690 / 1920 * 100%);
}

.hero__video-media {
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: 50% 50%;
}

.hero__inner {
  width: 100%;
  padding-left: 100px;
  padding-right: 100px;
  position: relative;
  z-index: 2;
}
.hero-subtitle {
  display: block;
  font-family: var(--font-helvetica);
  font-weight: 700;
  font-style: italic;
  color: #707070;
  margin-bottom: 10px;
}
.hero-subtitle-inner {
  display: block;
  font-size: 2.5rem;
  line-height: 2.1rem;
}
.hero-subtitle-inner_yellow {
  color: #f8b62d;
  font-size: 18px;
}
.hero-subtitle-sub {
  display: block;
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin-top: 5px;
}
.hero__title:first-of-type {
  transition: all 0.6s ease 0s;
}

.hero__title {
  display: block;
  margin-top: 10px;
}
.hero__title.visible .hero__title-inner {
  transform: translateX(0);
}

.hero__title-inner {
  display: inline-block;
  font-size: 3rem;
  line-height: 3.4rem;
  font-weight: 700;
  padding: 10px 50px 10px 10px;
  position: relative;
  overflow: hidden;
  transform: translateX(20px);
  transition: all 0.4s ease 0.5s;
}
.hero__title:last-of-type {
  transition: all 0.6s ease 0.3s;
}
.hero__desc {
  font-size: 1.5rem;
  line-height: 2.1rem;
  font-weight: 700;
  color: #111111;
  margin-top: 20px;
}

@media (min-width: 736px) {
  .hero__video-media--pc {
    display: block;
  }
}

/* NEWS SECTION */
.news {
  background-color: #f7f7f7;
  padding-top: 60px;
  padding-bottom: 60px;
}

/* WHY US */

/* AREA */
.area {
  padding-top: 60px;
  padding-bottom: 100px;
  background-color: #f7f7f7;
  background-image: url(../img/index/area_bg_pattern.svg);
  background-size: 20px 20px;
  background-repeat: repeat;
  background-position: 0 0;
}

body {
  padding: 20px;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #642afb;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  background-color: #fff7;
}
.view-all__btn {
  background: var(--accent-color);
  color: #fff;
  padding: 6px 15px;
  margin-right: 10px;
}
.post-wrap {
  background: #fff;
  padding: 10px;
}
.post-item-wrap {
  text-align: left;
}
.post-item-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.post-item-img img {
  height: 100%;
  object-fit: cover;
  width: 100%;
}
.post-item-title {
  margin: 10px 0 10px;
  text-align: left;
  font-size: 18px;
  color: #000;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #333;
  min-height: 40px;
}
.post-item-content {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: #333;
}
</style>
