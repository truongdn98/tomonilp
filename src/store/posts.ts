import { defineStore } from "pinia";

export const usePostsStore = defineStore({
  id: "posts",
  state: () => ({
    list: [
      {
        id: "1",
        name: "Xuất khẩu hàng hóa sang Nhật Bản: Phải vượt rào cản 'khó tính'",
        date: "1/3/2023",
        href: "xuat-khau-hang-hoa-sang-nhat-ban-phai-vuot-rao-can-kho-tinh",
        img: "https://i.doanhnhansaigon.vn/2022/04/26/xuat-khau-Nhat-9388-1650944882.jpg",
        description: `Thị trường Nhật Bản còn nhiều tiềm năng cho nông sản Việt Nam. Tuy nhiên, hàng hóa của doanh nghiệp (DN) Việt Nam
        xuất khẩu vào Nhật Bản phải đáp ứng được các yêu cầu 'rất
        khó tính'. Nhật Bản hiện là thị trường đứng thứ tư về kim
        ngạch xuất khẩu hàng hóa của Việt Nam. Hai nước là thành
        viên trong các FTA đa phương như CPTPP  RCEP`
      },
      {
        id: "2",
        name: "Quy định xuất khẩu hàng hóa vào thị trường Nhật Bản",
        date: "12/2/2023",
        href: "quy-dinh-xuat-khau-hang-hoa-vao-thi-truong-nhat-ban/",
        img: "https://i.doanhnhansaigon.vn/2022/04/13/xuat-khau-8546-1649819894.jpg",
        description: `Thị trường Nhật Bản còn nhiều tiềm năng cho nông sản Việt Nam. Tuy nhiên, hàng hóa của doanh nghiệp (DN) Việt Nam
        xuất khẩu vào Nhật Bản phải đáp ứng được các yêu cầu 'rất
        khó tính'. Nhật Bản hiện là thị trường đứng thứ tư về kim
        ngạch xuất khẩu hàng hóa của Việt Nam. Hai nước là thành
        viên trong các FTA đa phương như CPTPP  RCEP`
      },
      {
        id: "3",
        name: "Xuất khẩu hàng hóa sang Nhật và những điều cần lưu ý",
        date: "12/2/2023",
        href: "xuat-khau-hang-hoa-sang-nhat-va-nhung-dieu-can-luu-y",
        img: "https://innovativehub.com.vn/wp-content/uploads/2021/08/xuat-khau-hang-hoa-sang-nhat.jpg",
        description: `Hiệp định Đối tác Kinh tế Việt Nam-Nhật Bản (VJEPA) được ký kết vào tháng 12 năm 2008 (và có hiệu lực vào tháng 10 năm 2009) cùng với Hiệp định Đối tác Kinh tế Toàn diện ASEAN-Nhật Bản (AJCEP) được thực hiện vào tháng 12 năm 2008 và được sửa đổi vào tháng 8 năm 2020`
      },
      {
        id: "4",
        name: "Hiệp định Thương mại Việt Nam – Nhật Bản (VJEPA)",
        date: "12/2/2023",
        href: "hiep-dinh-thuong-mai-viet-nam-nhat-ban-vjepa/",
        img: "https://i.doanhnhansaigon.vn/2022/04/13/xuat-khau-8546-1649819894.jpg",
        description: `Hiệp định Thương mại Việt Nam – Nhật Bản (VJEPA)  là một trong 13 FTAs mà Việt Nam đã ký kết. Vậy Hiệp định gồm những thành viên nào? Đặc điểm và nội dung của Hiệp định gồm những gì? Hãy cùng Nguyên Đăng tìm hiểu thông qua bài viết dưới đây nhé!`
      },
      {
        id: "5",
        name: "Xuất khẩu nông sản đi Nhật Bản",
        date: "12/2/2023",
        href: "xuat-khau-nong-san-di-nhat-ban",
        img: "https://sagawavietnam.com/wp-content/uploads/2020/12/xuat-khau-nong-san-di-nhat-ban-1024x684.jpg",
        description: `Việt Nam và Nhật Bản là hai nước đã tham gia Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương do đó Nhật Bản sẽ xóa bỏ ngay thuế nhập khẩu đối với một số sản phẩm nông sản chủ lực của Việt Nam bao gồm: cà phê (rang, xay, hòa tan)`
      },
      {
        id: "6",
        name: "XUẤT KHẨU ĐỒ NỘI THẤT ĐI NHẬT BẢN (JAPAN)",
        date: "12/2/2023",
        href: "xuat-khau-do-noi-that-di-nhat-ban-japan/",
        img: "https://logistics.options.vn/wp-content/uploads/2022/05/Xuat-khau-do-noi-that.webp",
        description: `Cùng với việc thương mại điện tử Alibaba, Amazon, … ngày càng phát triển và các Hiệp định thương mại tự do Việt Nam – EU, Hiệp định Đối tác Toàn diện và Tiến bộ xuyên Thái Bình Dương (CPTPP) và cuộc chiến thương mại giữa Mỹ và Trung Quốc, đều sẽ có những tác động tích cực giúp cho thị trường Xuất khẩu đồ nội thất bằng gỗ của Việt Nam phát triển.`
      }, {
        id: "7",
        name: "Cơ hội xuất khẩu nông sản, thực phẩm sạch của Việt Nam",
        date: "12/2/2023",
        href: "co-hoi-xuat-khau-nong-san-thuc-pham-sach-cua-viet-nam",
        img: "https://media.vov.vn/sites/default/files/styles/large/public/2023-03/3_14-02-2023-16-19-10.jpg",
        description: `Trong bối cảnh tình hình thế giới có nhiều tác động ảnh hưởng đến hoạt động xuất khẩu nói chung, các mặt hàng nông sản nói riêng. Thực tế xuất khẩu nông, lâm, thuỷ sản qua 2 tháng đầu năm giảm sâu (giảm 22,5% so với cùng kỳ năm trước, chỉ đạt khoảng 6,28 tỷ USD). `
      },
      {
        id: "8",
        name: "Thủ tục xuất khẩu hàng hóa sang Nhật Bản mới nhất 2023",
        date: "12/2/2023",
        href: "thu-tuc-xuat-khau-hang-hoa-sang-nhat-ban-moi-nhat-nam-2023/",
        img: "https://accgroup.vn/wp-content/uploads/2021/09/thu-tuc-nk-hang-hoa-sang-nhat.jpg",
        description: `Nhật Bản là một đất nước có tiềm năng kinh tế lớn. Đến nay, Việt Nam và Nhật Bản đang là thành viên của 3 Hiệp định thương mại tự do (FTA) song phương, đa phương, bao gồm: Hiệp định Đối tác kinh tế Việt Nam – Nhật Bản  `
      },
      {
        id: "8",
        name: "THỦ TỤC XUẤT KHẨU XOÀI CÁT CHU SANG NHẬT BẢN",
        date: "12/2/2023",
        href: "thu-tuc-xuat-khau-xoai-cat-chu-sang-nhat-ban",
        img: "https://vtv1.mediacdn.vn/thumb_w/650/2017/xoai-1512358040666.jpg",
        description: `Nhật Bản là một trong những thị trường khó tính bậc nhất trên thế giới trong ngành hàng công nghiệp thực phẩm, trái cây Việt Nam muốn xuất khẩu sang Nhật Bản cần phải có một khoảng thời gian dài kiểm tra nghiêm ngặt để được Nhật Bản chấp thuận `
      } 
    ],
  }),
});