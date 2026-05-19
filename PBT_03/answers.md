PHẦN A — KIỂM TRA ĐỌC HIỂU
Câu A1 (5đ) — 3 Cách nhúng CSS
Tài liệu tham chiếu: tuan_2_css_core/08_introduction_css.md

Inline CSS (trong thẻ)
<h1 style="color: red; font-size: 24px;">Tiêu đề</h1>
Ưu điểm:

Có độ ưu tiên cao nhất, giúp ghi đè các quy tắc CSS khác một cách dễ dàng.
Hữu ích khi cần kiểm tra nhanh hoặc thay đổi kiểu dáng cho một phần tử đơn lẻ.
Nhược điểm:

Vi phạm nguyên tắc tách biệt giữa cấu trúc (HTML) và trình bày (CSS).
Làm mã nguồn HTML trở nên lộn xộn, khó bảo trì nếu áp dụng cho nhiều phần tử.
Không thể tái sử dụng mã CSS cho các trang khác.
Nên dùng khi:

Cần thay đổi kiểu dáng nhanh chóng cho một phần tử duy nhất
Trong các email HTML (nơi các file CSS bên ngoài thường không được hỗ trợ tốt).
Internal CSS trong <style>
<head>
  <style>
    h1 {
      color: red;
      font-size: 24px;
    }
  </style>
</head>
Ưu điểm:

Không cần tạo file riêng, phù hợp cho các trang đơn (single-page)
Các quy tắc được gom chung vào một vị trí, giúp dễ đọc và quản lý cho một trang cụ thể
Nhược điểm:

Nếu website có nhiều trang, ta sẽ phải sao chép đoạn CSS này vào từng trang, gây khó khăn khi cập nhật
Làm tăng kích thước file HTML và làm chậm thời gian tải trang
Nên dùng khi:

Xây dựng một trang web đơn (Landing Page) hoặc một trang duy nhất không có nhiều nội dung phức tạp.
Muốn kiểm tra toàn bộ giao diện của một trang trước khi tách thành file riêng.
External CSS (file riêng)
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
Ưu điểm:

Giữ cho code HTML gọn gàng, tách biệt rõ ràng giữa cấu trúc và thiết kế.
Một file CSS có thể dùng chung cho nhiều trang HTML. Khi thay đổi file CSS, toàn bộ trang web sẽ tự động cập nhật.
Trình duyệt có thể lưu vào bộ nhớ đệm (cache), giúp tăng tốc độ tải trang ở những lần truy cập sau.
Nhược điểm:

Trình duyệt cần gửi thêm một yêu cầu HTTP để tải file CSS, có thể làm chậm tải trang lần đầu tiên.
Nên dùng:

Trong Các dự án thực tế, đặc biệt là các trang web có nhiều trang hoặc một dự án lớn cần duy trì lâu dài.
Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách nào "thắng"?
Thứ tự ưu tiên từ cao xuống thấp như sau:

Inline CSS (Thắng): Do nằm trực tiếp trên thẻ, trình duyệt ưu tiên cao nhất.

Internal & External CSS (Hòa): Hai cách này có độ ưu tiên ngang nhau. Cái nào được trình duyệt đọc sau cùng (nằm thấp hơn trong file HTML) sẽ thắng.

Nguyên tắc chung: Càng gần phần tử HTML nhất thì càng mạnh (trừ khi có từ khóa !important sẽ chiếm quyền tối cao).

Câu A2 — CSS Selectors — Dự đoán kết quả
h1 → Chọn: ShopTLU
.price → Chọn: cả 2 thẻ p có class="price" (25.990.000đ và 45.990.000đ)
#app header → Chọn: thẻ header mà cha của nó có id="app" (toàn bộ nội dung thẻ header và các thẻ con của nó)
nav a:first-child → Chọn: thẻ a là con đầu tiên của thẻ nav (Home)
.product.featured h2 → Chọn: thẻ h2 có cả 2 class là product và featured (MacBook Pro)
article > p → Chọn: tất cả thẻ p là con trực tiếp của thẻ article
a[href="/"] → Chọn: thẻ a có href="/" (Home)
.top-bar.dark h1 → Chọn: thẻ h1 có class là top-bar và dark
Câu A3 (7đ) — Box Model — Tính toán kích thước
Trường hợp 1: content-box (mặc định)

→ Chiều rộng hiển thị (Visible width) = 450px (Cách tính: 400px content + 40px padding 2 bên + 10px border 2 bên)

→ Không gian chiếm trên trang (Total space) = 470px (Cách tính: 450px chiều rộng hiển thị + 20px margin 2 bên)

Trường hợp 2: border-box

→ Chiều rộng hiển thị (Visible width) = 400px (Cách tính: Khi dùng border-box, thuộc tính width chính là tổng chiều rộng bao gồm cả content, padding và border)

→ Kích thước content thực tế = 350px (Cách tính: 400px tổng - 40px padding 2 bên - 10px border 2 bên)

→ Không gian chiếm trên trang (Total space) = 420px (Cách tính: 400px chiều rộng hiển thị + 20px margin 2 bên)

Trường hợp 3: Margin collapse

→ Khoảng cách giữa box-a và box-b = 40px

→ Giải thích tại sao KHÔNG PHẢI 65px: Trong CSS có một quy tắc gọi là "Margin Collapse" (gộp margin). Khi hai block element nằm cạnh nhau theo chiều dọc, margin-bottom của phần tử trên và margin-top của phần tử dưới sẽ không cộng dồn vào nhau (25 + 40 = 65), mà trình duyệt sẽ lấy giá trị margin nào LỚN HƠN để làm khoảng cách chung (trong trường hợp này là 40px).

Nâng cao: * Nếu .box-a có margin-bottom: -10px và .box-b có margin-top: 40px, khoảng cách = 30px. (Giải thích: Theo quy tắc Margin Collapse khi có margin âm, trình duyệt sẽ lấy margin dương lớn nhất cộng đại số với margin âm nhỏ nhất, tức là: 40px + (-10px) = 30px).
Câu A4 (5đ) — Specificity (Độ ưu tiên)
Tính specificity score (a, b, c) cho mỗi rule:
Rule A (p): (0, 0, 1) - Do chỉ có 1 thẻ (tag).

Rule B (.price): (0, 1, 0) - Do chỉ có 1 class.

Rule C (#main-price): (1, 0, 0) - Do có 1 id.

Rule D (p.price): (0, 1, 1) - Do có 1 class và 1 thẻ.

Element sẽ có màu gì? Giải thích:
Element sẽ có màu đỏ (red).

Giải thích: Theo quy tắc tính điểm độ ưu tiên (Specificity), Rule C (#main-price) có điểm cao nhất là (1, 0, 0). Do đó, trình duyệt sẽ ưu tiên áp dụng màu đỏ của Rule C và bỏ qua các rule có điểm thấp hơn.

Nếu thêm
, element có màu gì?

Element sẽ có màu cam (orange).

Giải thích: Thuộc tính style="color: orange;" là Inline CSS. Inline CSS có độ ưu tiên cao nhất, đánh bại mọi selector thông thường (kể cả ID selector).

Nếu Rule A thêm !important, element có màu gì? Tại sao?
Element sẽ có màu đen (black).

Tại sao: Từ khóa !important là một ngoại lệ đặc biệt trong CSS. Khi một thuộc tính được gắn !important, nó sẽ phá vỡ mọi quy tắc tính điểm specificity và ép trình duyệt phải ưu tiên áp dụng thuộc tính đó tuyệt đối, đánh bại cả ID selector hay Inline CSS. Do đó Rule A (màu đen) sẽ chiến thắng tất cả.
# Câu A3

```css
/* Trường hợp 1: content-box (mặc định) */
.box-1 {
  width: 400px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
→ Chiều rộng hiển thị = 450px
→ Không gian chiếm trên trang = 470px

/* Trường hợp 2: border-box */
.box-2 {
  box-sizing: border-box;
  width: 400px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 350px
→ Không gian chiếm trên trang = 420px

/* Trường hợp 3: Margin collapse */
.box-a {
  margin-bottom: 25px;
}
.box-b {
  margin-top: 40px;
}
```

→ Khoảng cách giữa box-a và box-b = 40px
→ Giải thích tại sao KHÔNG PHẢI 65px
Trong CSS, khi các lề dọc (margins) gặp nhau, chúng không cộng dồn lại mà bị "gộp" (collapse).

Quy tắc là: Giá trị lề lớn hơn sẽ được giữ lại, và giá trị nhỏ hơn sẽ bị triệt tiêu bên trong lề lớn đó.

Ở đây, 40px (margin-top của box-b) lớn hơn 25px (margin-bottom của box-a), vì vậy trình duyệt chọn 40px làm khoảng cách thực 