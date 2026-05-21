PHẦN A
Câu A1 - Viewport & Mobile-First
Dưới đây là câu trả lời chi tiết và chuẩn xác cho câu hỏi lý thuyết Viewport & Mobile-First.

Thẻ chuẩn và giải thích thuộc tính
Giải thích các thuộc tính bên trong cặp content="":

width=device-width: Đặt độ rộng của vùng hiển thị (viewport) trên trình duyệt bằng đúng với độ rộng thực tế của màn hình thiết bị (tính theo pixel logic/CSS pixel, không phải pixel phần cứng).

initial-scale=1.0: Đặt mức độ phóng to (zoom) ban đầu là 100% khi trang web vừa tải xong, ngăn trình duyệt tự động phóng to hay thu nhỏ nội dung.

Hiện tượng xảy ra trên iPhone nếu THIẾU thẻ này
Nếu không có thẻ viewport, các trình duyệt di động (như Safari trên iPhone) sẽ tự động giả định rằng trang web này được thiết kế dành riêng cho màn hình máy tính lớn (Desktop).

Cách hiển thị: iPhone sẽ ép toàn bộ trang web hiển thị trong một viewport ảo có độ rộng mặc định khoảng 980px, sau đó tự động thu nhỏ (zoom out) toàn cục để nhét vừa khít giao diện 980px đó vào màn hình điện thoại tí hon.

Trải nghiệm người dùng: Trang web nhìn từ xa trông giống như một bức ảnh thu nhỏ. Chữ nghĩa, hình ảnh và các nút bấm sẽ trở nên bé tí tin hin, buộc người dùng phải dùng hai ngón tay phóng to (pinch-to-zoom) liên tục và cuộn ngang cuộn dọc mới có thể đọc được nội dung.

Phân biệt Mobile-First và Desktop-First
Sự khác biệt cốt lõi nằm ở tư duy thiết kế và thứ tự ưu tiên viết mã CSS:

Mobile-First (Ưu tiên di động): Viết CSS cơ bản cho màn hình nhỏ trước (không nằm trong Media Query). Sau đó, dùng các điều kiện kích thước tăng dần để bổ sung/ghi đè thuộc tính cho màn hình lớn. Dùng từ khóa min-width.

Desktop-First (Ưu tiên máy tính): Viết CSS cơ bản cho màn hình lớn trước. Sau đó, dùng các điều kiện kích thước giảm dần để bóp nhỏ hoặc ẩn bớt các phần tử khi màn hình co lại. Dùng từ khóa max-width.

Ví dụ minh họa CSS (Breakpoint 768px): Cách 1: Mobile-First (min-width)

/* Mặc định: Áp dụng cho Mobile (Dưới 768px) */
.content-box {
  width: 100%;
  font-size: 14px;
}

/* Khi màn hình RỘNG TỪ 768px trở lên (Tablet/Desktop) */
@media (min-width: 768px) {
  .content-box {
    width: 50%;
    font-size: 16px;
  }
}
Cách 2: Desktop-First (max-width)

CSS
/* Mặc định: Áp dụng cho Desktop (Trên 768px) */
.content-box {
  width: 50%;
  font-size: 16px;
}

/* Khi màn hình CO LẠI DƯỚI 768px (Mobile) */
@media (max-width: 767.98px) {
  .content-box {
    width: 100%;
    font-size: 14px;
  }
}
Tại sao Mobile-First được khuyên dùng rộng rãi?
Chiến lược Mobile-First trở thành quy chuẩn ngành nhờ 3 lý do thực tế sau:

Tối ưu hiệu năng (Performance): Thiết bị di động thường có cấu hình phần cứng yếu hơn và sử dụng mạng di động (3G/4G/5G) kém ổn định hơn máy tính. Viết CSS Mobile-First giúp trình duyệt điện thoại tải trực tiếp các dòng mã gọn nhẹ ngay từ đầu mà không phải tốn tài nguyên xử lý hay ghi đè các bộ khung nặng nề của bản Desktop.

Tư duy tinh gọn nội dung (Content Strategy): Thiết kế cho màn hình nhỏ ép nhà phát triển và designer phải tập trung vào những tính năng cốt lõi và nội dung quan trọng nhất của doanh nghiệp. Bạn không thể nhồi nhét những thứ "rác giao diện" vào một màn hình rộng 375px. Khi mở rộng lên bản Desktop, giao diện sẽ phát triển một cách tự nhiên và mạch lạc.

Tốt cho SEO (Google PageRank): Từ lâu, Google đã áp dụng thuật toán Mobile-First Indexing — nghĩa là Google sẽ ưu tiên sử dụng phiên bản di động của trang web để lập chỉ mục và xếp hạng trên công cụ tìm kiếm. Một trang web chuẩn Mobile-First sẽ ghi điểm tuyệt đối trong mắt Google.

Câu A2
Các Breakpoint phổ biến (theo Bootstrap)

Breakpoint	Kích thước	Thiết bị đại diện	Ví dụ lưới sản phẩm
xs	< 576px	Điện thoại nhỏ	1 cột
sm	≥ 576px	Điện thoại lớn	2 cột
md	≥ 768px	Tablet	2–3 cột
lg	≥ 992px	Laptop nhỏ	3–4 cột
xl	≥ 1200px	Desktop	4 cột
xxl	≥ 1400px	Màn hình lớn / TV	5–6 cột
Câu A3
Chiều rộng màn hình	Media query áp dụng	.container width
375px (iPhone SE)	Không media query nào khớp	100%
600px	min-width: 576px	540px
800px	min-width: 768px	720px
1000px	min-width: 992px	960px
1400px	min-width: 1200px	1140px
Câu A4
4 tính năng chính của SCSS và ví dụ

Variables (Biến số)
Giải thích: Tính năng này cho phép bạn lưu trữ các giá trị được sử dụng lặp đi lặp lại nhiều lần (như mã màu, font chữ, kích thước, khoảng cách border) vào trong một cái tên gợi nhớ bắt đầu bằng ký tự $. Khi muốn đổi màu toàn bộ hệ thống, bạn chỉ cần sửa đúng một nơi duy nhất tại vị trí khai báo biến.

Ví dụ:

$primary-color: #007bff;
$spacing-lg: 20px;

.btn-submit {
  background-color: $primary-color;
  padding: $spacing-lg;
}
Nesting (Cú pháp lồng nhau)
Giải thích: Thay vì phải viết đi viết lại bộ chọn cha (Selector) theo cách viết CSS truyền thống, SCSS cho phép bạn viết các bộ chọn con lồng trực tiếp vào bên trong bộ chọn cha. Cách viết này mô phỏng chính xác cấu trúc hình cây của phân cấp HTML, giúp code gọn gàng và dễ quản lý hơn. Đặc biệt, ký tự & được dùng để đại diện cho chính bộ chọn cha đó (thường dùng cho pseudo-class như :hover, :focus).

Ví dụ:

.navbar {
  background: #fff;

  .nav-item {
    color: #333;
    &:hover {
      color: blue;
    } // Tương đương .navbar .nav-item:hover
  }
}
Mixins (@mixin và @include)
Giải thích: Mixin giống như một "hàm" trong lập trình. Nó cho phép gom một tập hợp nhiều dòng thuộc tính CSS lại thành một khối để tái sử dụng ở bất kỳ đâu. Hơn nữa, Mixin có thể nhận các tham số truyền vào để linh hoạt thay đổi giá trị đầu ra. Ta định nghĩa khối bằng @mixin và gọi nó ra bằng @include.

Ví dụ:

// Định nghĩa mixin căn giữa bằng Flexbox
@mixin flex-center($direction: row) {
  display: flex;
  flex-direction: $direction;
  justify-content: center;
  align-items: center;
}

// Sử dụng mixin
.hero-content {
  @include flex-center(column); /* Truyền tham số trục dọc */
}
@extend / Inheritance (Kế thừa)
Giải thích: Tính năng này cho phép một bộ chọn chia sẻ hoặc "sao chép ké" lại toàn bộ các thuộc tính CSS của một bộ chọn khác. Nó giúp giảm thiểu việc lặp lại code, tạo ra các class có tính chất tương tự nhau nhưng biến tấu một chút ở phần đuôi (như các loại nút bấm báo lỗi, nút thành công dựa trên một khung nút cơ bản).

Ví dụ:

.btn-base {
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
}

.btn-success {
  @extend .btn-base;
  background-color: green; /* Kế thừa nút cơ bản và chỉ đổi màu nền */
}
Tại sao trình duyệt KHÔNG đọc được file .scss? Quy trình chuyển đổi

Nguyên nhân:Các trình duyệt web (như Chrome, Safari, Edge, Firefox) được lập trình để chỉ hiểu và phân tích cú pháp chuẩn của ngôn ngữ **CSS gốc (CSS thuần túy). Cú pháp của SCSS (với các ký hiệu $, lồng nhau, @mixin,...) nằm ngoài bộ quy tắc xử lý của lõi trình duyệt, nếu bạn nạp trực tiếp file .scss vào thẻ <link>, trình duyệt sẽ báo lỗi cú pháp hoặc phớt lờ hoàn toàn.

Giải pháp (Bước chuyển đổi): Để trình duyệt chạy được, cần thực hiện một bước gọi là Biên dịch (Compilation) để chuyển đổi tệp .scss thành tệp .css thông qua các công cụ hỗ trợ.

Các cách chuyển đổi phổ biến trong thực tế:

Dùng Extension Cài đặt tiện ích mở rộng Live Sass Compiler trực tiếp trên VS Code. Mỗi khi nhấn Ctrl + S lưu file .scss, nó sẽ tự động biên dịch ra file .css song song ngay lập tức.

Dùng Node-Sass / Dart-Sass: Chạy câu lệnh qua Terminal bằng npm: sass style.scss style.css.

Dùng Bundler tự động: Tích hợp vào các công cụ đóng gói mã nguồn như Vite, Webpack,

Phần C
PHẦN C — PHÂN TÍCH
Câu C1 — Phân tích trang web thực
Trang chọn: TIKI VN — trang chủ
Công cụ: Chrome DevTools → Toggle device toolbar (Ctrl+Shift+M)

File	Kích thước DevTools
c1_tiki_375px.png	iPhone SE / Custom 375×667
c1_tiki_768px.png	iPad / Custom 768×1024
c1_tiki_1440px.png	Responsive / Custom 1440×900
c1_media_query_1.png	DevTools → tab Styles → rule @media (VD: ẩn/hiện sidebar)
2. Phân tích chi tiết
Tiêu chí	Mobile 375px	Tablet 768px	Desktop 1440px
Navigation	Hamburger ☰ hoặc icon menu; thanh tìm kiếm thu gọn / icon; ít chữ	Search bar dài hơn; menu ngang một phần	Full search + link danh mục; sidebar danh mục cố định bên trái
Lưới sản phẩm	2 cột (card nhỏ)	4 cột	5–6 cột tùy vùng
Ẩn trên mobile	Sidebar danh mục desktop; footer nhiều cột gộp; banner phụ; một số promo text	Ít ẩn hơn; sidebar vẫn có thể ẩn đến khi ≥ lg	Hiển thị đầy đủ
Font size	Nhỏ hơn (title ~12–14px, giá ~14px)	Trung bình	Lớn hơn, khoảng cách thoáng
Navigation: Mobile ưu tiên icon + bottom/tab bar (app-like). Desktop mở rộng cấu trúc 2 vùng: sidebar + main — điển hình desktop-first content, mobile-first ẩn bớt.

Lưới: Số cột tăng theo min-width (Mobile-First trong CSS của họ).

Ẩn: Sidebar trái, chuỗi breadcrumb dài, block “gợi ý” phụ thường display: none hoặc chuyển thành carousel ngang trên mobile.

Font: Dùng rem / media query — heading và giá scale up từ 768px và 1200px+ (quan sát trong DevTools → Computed).

3. Media queries (DevTools)
Cách tìm: Elements → chọn .container hoặc grid sản phẩm → Styles → cuộn tìm @media (...).

Ví dụ rule thường gặp trên site thương mại (minh họa):

/* Ví dụ kiểu rule — tên class có thể khác trên Shopee */
@media (min-width: 768px) {
  .product-list { grid-template-columns: repeat(4, 1fr); }
}

@media (min-width: 1200px) {
  .category-sidebar { display: block; }
  .product-list { grid-template-columns: repeat(6, 1fr); }
}
Screenshot 2 rule: Chụp panel Styles khi highlight một rule @media (min-width: …) đang active (không bị gạch ngang) ở từng breakpoint.

Câu C2 — Thiết kế Responsive Strategy (Đặt bàn nhà hàng)
Wireframe — Mobile (< 768px)
Ẩn / thu gọn: Sidebar; bản đồ có thể ẩn hoặc thu thành nút “Xem bản đồ”; menu nav → hamburger.

Form: Nằm ngay dưới hero, full width, 1 cột các input xếp dọc.

┌──────────────────────┐
│ LOGO    📞 Gọi đặt  │
├──────────────────────┤
│    HERO (full width) │
├──────────────────────┤
│  FORM ĐẶT BÀN        │
│  [Ngày]              │
│  [Giờ]               │
│  [Số người]          │
│  [Ghi chú]           │
│  [ Gửi yêu cầu ]     │
├──────────────────────┤
│  MÓN ĂN (1 cột)      │
│  ┌────────────────┐  │
│  │ ảnh món 1      │  │
│  └────────────────┘  │
│  ... (6 món xếp dọc) │
├──────────────────────┤
│ [ Xem bản đồ ] (btn) │  ← map ẩn, mở tab/link
├──────────────────────┤
│ FOOTER               │
└──────────────────────┘
Wireframe — Tablet (768px – 1023px)
Grid món: 2 cột × 3 hàng = 6 ảnh.
Bản đồ: Dưới form hoặc cạnh form (2 cột: form trái 50% | map phải 50%).
Không sidebar riêng.

┌────────────────────────────────┐
│ LOGO              📞 090x xxx  │
├────────────────────────────────┤
│         HERO                   │
├───────────────┬────────────────┤
│ FORM đặt bàn  │  Google Maps   │
├───────────────┴────────────────┤
│ ┌──────┐ ┌──────┐              │
│ │ món1 │ │ món2 │   2 cột     │
│ ├──────┤ ├──────┤              │
│ │ món3 │ │ món4 │              │
│ └──────┘ └──────┘              │
├────────────────────────────────┤
│ FOOTER                         │
└────────────────────────────────┘
Wireframe — Desktop (≥ 1024px)
Layout: 2 cột chính — không sidebar danh mục; có thể sidebar phải nhỏ (giờ mở cửa, hotline).

┌──────────────────────────────────────────────────┐
│ LOGO                    📞 Đặt bàn: 1900 xxxx    │
├──────────────────────────────────────────────────┤
│              HERO (full width)                   │
├─────────────────────────────┬────────────────────┤
│ FORM (60%)                  │ MAP + Giờ mở cửa   │
│                             │ (sidebar ~40%)   │
├─────────────────────────────┴────────────────────┤
│  MÓN ĂN — grid 3 cột × 2 hàng (6 ảnh)           │
├──────────────────────────────────────────────────┤
│ FOOTER (3–4 cột link)                            │
└──────────────────────────────────────────────────┘
Câu hỏi	Trả lời
Mobile ẩn gì?	Sidebar phụ; map embed (thay bằng nút); nav phụ
Form mobile ở đâu?	Dưới hero, full width
Tablet grid món?	2 cột
Tablet map?	Cạnh form (2 cột) hoặc dưới form
Desktop cột?	2 cột (nội dung + sidebar info); món 3 cột
CSS skeleton (Mobile-First, Grid)
File tham khảo: restaurant_skeleton.css (layout only).
/* restaurant_skeleton.css — PBT_05 C2 */

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
}

/* --- Mobile default --- */
.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
}

.hero {
  min-height: 40vh;
  background: #ccc center/cover no-repeat;
}

.page-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 16px;
}

.booking-form {
  display: grid;
  gap: 12px;
}

.booking-form input,
.booking-form textarea,
.booking-form select {
  width: 100%;
}

.map-wrap {
  display: none; /* mobile: ẩn embed, dùng nút .map-fallback */
}

.map-fallback {
  display: block;
  text-align: center;
  padding: 12px;
}

.dish-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.dish-grid img {
  width: 100%;
  height: auto;
}

.site-footer {
  padding: 24px 16px;
  background: #1a1a1a;
  color: #fff;
}

/* --- Tablet --- */
@media (min-width: 768px) {
  .page-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "hero hero"
      "form map"
      "dishes dishes"
      "footer footer";
  }

  .hero { grid-area: hero; min-height: 50vh; }
  .booking-form { grid-area: form; }
  .map-wrap {
    display: block;
    grid-area: map;
    min-height: 280px;
  }
  .map-fallback { display: none; }

  .dish-grid {
    grid-area: dishes;
    grid-template-columns: repeat(2, 1fr);
  }

  .site-footer { grid-area: footer; }
}

/* --- Desktop --- */
@media (min-width: 1024px) {
  .page-grid {
    grid-template-columns: 1.2fr 0.8fr;
    grid-template-areas:
      "hero hero"
      "form sidebar"
      "dishes dishes"
      "footer footer";
    max-width: 1200px;
    margin: 0 auto;
  }

  .info-sidebar {
    grid-area: sidebar;
  }

  .dish-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .site-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}
HTML gợi ý khớp grid-area:
<div class="page-grid">
  <section class="hero"></section>
  <form class="booking-form">...</form>
  <aside class="info-sidebar"><!-- giờ mở cửa --></aside>
  <div class="map-wrap"><!-- iframe Maps --></div>
  <a href="#" class="map-fallback">Xem bản đồ</a>
  <section class="dish-grid">...</section>
  <footer class="site-footer">...</footer>
</div>