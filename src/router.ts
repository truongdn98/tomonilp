import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import Archivements from "@/views/page/Archivements.vue";
import AboutUs from "./views/page/AboutUs.vue";
import Services from "./views/page/Services.vue";
import Service1 from "./views/page/Service1.vue";
import Service2 from "./views/page/Service2.vue";
import Service3 from "./views/page/Service3.vue";
import News from "./views/page/News.vue";
import PostDetail from "./views/page/PostDetail.vue";
import Post1 from "./views/post/1.vue";
import Post2 from "./views/post/2.vue";
import Contact from "./views/page/Contact.vue";
import { nextTick } from "vue";
import {usePostsStore} from "./store/posts"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "Trang chủ" },
    },
    {
      path: "/about-us",
      name: "company",
      component: AboutUs,
      meta: { title: "Về chúng tôi" },
    },
    {
      path: '/services',
      name: 'service',
      meta: { title: "Dịch vụ" },
      children: [
        { path: '', 
        name: 'dashboard', 
        component: Services, 
        meta: { title: "Dịch vụ" }, },
        {
          path: 'service-1',
          name: 'service-1',
          component: Service1,
          meta: { title: "Chiến lược" },
        },
        {
          path: 'service-2',
          name: 'service-2',
          component: Service2,
          meta: { title: "Dịch vụ" },
        },
        {
          path: 'service-3',
          name: 'service-3',
          component: Service3,
          meta: { title: "Hoạt động của các Store" },
        },
        {
          path: 'service-4',
          name: 'service-4',
          component: Service3,
          meta: { title: "Hỗ trợ hậu cần" },
        },
      ],
    },
    {
      path: "/news",
      name: "news",
      meta: { title: "Tin tức" },
      children: [
        { path: '', 
        name: 'news', 
        component: News, 
        meta: { title: "Tin tức" }, },
        {
          path: 'xuat-khau-hang-hoa-sang-nhat-ban-phai-vuot-rao-can-kho-tinh',
          name: 'post-1',
          component: Post1,
          meta: { title: "Xuất khẩu hàng hóa sang Nhật Bản: Phải vượt rào cản 'khó tính'" },
        },
        {
          path: 'quy-dinh-xuat-khau-hang-hoa-vao-thi-truong-nhat-ban',
          name: 'post-2',
          component: Post2,
          meta: { title: "Quy định xuất khẩu hàng hóa vào thị trường Nhật Bản" },
        },
    ]
    },
    {
      path: "/archivements",
      name: "Archivements",
      component: Archivements,
      meta: { title: "Thành tích" },
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: { title: "Liên hệ" },
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "Home",
    //   meta: { title: "Trang chủ" },
    //   component: HomeView,
    // },
  ],
});


router.afterEach((to) => {
  nextTick(() => {
    document.title =
      (to.meta.title || to.name) + " | " + import.meta.env.VITE_APP_NAME;
  });
});


// router.beforeEach((to) => {
//   usePostsStore().list.forEach(x => {
//     console.log(x)
//     router.addRoute({
//       path: "/news/" + x.href,
//       name: x.href,
//       component: PostDetail,
//       meta: { title: x.name },
//     },)
//   })
//   console.log()

// })
export default router;