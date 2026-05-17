Câu A1:
1: 5 bước xảy ra khi gõ https://shopee.vn và nhấn Enter:
Dựa theo mục 1.1 (Kiến trúc Client-Server) và 1.3 (Browser Rendering), trình tự đúng là:

1.Gửi HTTP Request: Trình duyệt (Client) gửi một yêu cầu dữ liệu (Request) qua môi trường Internet đến máy chủ (Server) của Shopee để yêu cầu nội dung trang web.

2.Server tiếp nhận và xử lý: Máy chủ Shopee nhận yêu cầu, truy xuất các tệp tin cần thiết (HTML, dữ liệu từ Database) và chuẩn bị phản hồi.

3.Trả về HTTP Response: Server gửi ngược lại một gói phản hồi (Response) bao gồm mã trạng thái (như 200 OK) và các tệp tin mã nguồn (HTML, CSS, JavaScript).

4.Phân tích (Parse) HTML và CSS: Trình duyệt bắt đầu đọc mã HTML để xây dựng cấu trúc trang (DOM) và đọc mã CSS để xác định phong cách thiết kế, màu sắc và bố cục (Layout).

5.Thực thi JS và Hiển thị (Render): Trình duyệt chạy các đoạn mã JavaScript để tạo tính tương tác, sau đó tiến hành quá trình Paint để vẽ các điểm ảnh lên màn hình, hoàn thiện giao diện cho người dùng.

2:
Tab Network cho biết tất cả các hoạt động truyền tải dữ liệu giữa trình duyệt và máy chủ. Nó giúp lập trình viên theo dõi các tệp tin nào đang được tải, dung lượng bao nhiêu, thời gian tải bao lâu và có lỗi nào xảy ra trong quá trình truyền tải hay không.
![alt text](image.png)

Câu A2:
1. Lý do trang web bị đánh giá SEO thấp
Trang web bị đánh giá SEO thấp vì lạm dụng quá nhiều thẻ <div> (lỗi Divitis). Các công cụ tìm kiếm như Google sử dụng các thẻ Semantic (thẻ có ý nghĩa) để hiểu cấu trúc trang web. Việc chỉ dùng <div> khiến Google Bot không thể phân biệt đâu là phần đầu trang, nội dung chính hay tiêu đề quan trọng, từ đó làm giảm thứ hạng hiển thị.
Liệt kê ít nhất 4 lỗi semantic và sửa lại:
1.Đầu trang:<div class="header"> -><header>
2.Thanh điều hướng	<div class="menu">-><nav>
3.Nội dung chính	<div class="main">-><main>
4.Tiêu đề sản phẩm	<div class="title">-><h2>

Câu A3:
Nhóm thẻ Block (<div>): Có đặc tính luôn bắt đầu trên một dòng mới và chiếm trọn 100% chiều ngang của phần tử cha. Do đó, Hộp 1, Hộp 2 và Hộp 3 luôn nằm tách biệt trên các dòng riêng nội bộ.

Nhóm thẻ Inline (<span>, <strong>): Chỉ chiếm không gian vừa đủ với nội dung bên trong và không tự động xuống dòng. Vì vậy, Text A và Text B sẽ hiển thị cùng nhau trên một hàng; tương tự, Text C và Text D cũng nằm chung một hàng.

Sự ngắt dòng: Khi một thẻ Block xuất hiện sau một thẻ Inline (ví dụ Hộp 2 xuất hiện sau Text B), thẻ Block sẽ tự động ngắt dòng để tạo lập một khối riêng biệt, đẩy các nội dung phía sau nó xuống hàng tiếp theo.
![alt text](image-1.png)

Câu A4:
1. Phân biệt các thành phần trong Table
Việc sử dụng các thẻ <thead>, <tbody>, và <tfoot> giúp phân tách cấu trúc bảng một cách logic:

<thead> (Header): Dùng để chứa các tiêu đề cột. Các nội dung trong này thường giúp người dùng hiểu các dữ liệu bên dưới đại diện cho cái gì. (Thường dùng kèm với thẻ <th>).

<tbody> (Body): Đây là phần quan trọng nhất, chứa nội dung dữ liệu chính của bảng. Đây là nơi liệt kê các hàng (<tr>) và các ô dữ liệu (<td>) cụ thể.

<tfoot> (Footer): Dùng để tóm tắt hoặc tổng kết dữ liệu của toàn bộ bảng (ví dụ: dòng tổng tiền, tổng số lượng sản phẩm).

2. Tại sao KHÔNG NÊN dùng table để tạo layout trang web?
3 lý do sau:

1.Sai mục đích (Semantic Error): Thẻ <table> được sinh ra chỉ để hiển thị dữ liệu dạng bảng (so sánh, thống kê). Việc dùng nó cho layout khiến các công cụ tìm kiếm (Google) và các thiết bị hỗ trợ người khiếm thị không hiểu được cấu trúc thực tế của trang web.

2.Khó phản hồi (Responsive kém): Layout bằng bảng rất khó để co giãn trên màn hình điện thoại. Việc điều chỉnh các hàng và cột của bảng để hiển thị đẹp trên mobile phức tạp hơn rất nhiều so với dùng CSS Flexbox hoặc Grid.

3.Hiệu năng và bảo trì: Mã HTML khi dùng table cho layout sẽ trở nên cực kỳ rườm rà (lồng ghép nhiều tầng tr, td). Điều này khiến trang web tải chậm hơn và rất khó khăn cho việc sửa chữa giao diện sau này.

Bài b3:
1: Dòng 1 — Thiếu chữ "html" trong thẻ khai báo — Cách sửa: Sửa thành <!DOCTYPE html>.

Lỗi 2: Dòng 2 — Thẻ <title> chưa đóng — Cách sửa: Thêm thẻ đóng </title>.

Lỗi 3: Dòng 3 — Giá trị charset sai định dạng — Cách sửa: Sửa utf8 thành UTF-8.

Lỗi 4: Dòng 5 — Thẻ kết thúc của <h1> bị viết sai thẻ mở — Cách sửa: Sửa <h1> ở cuối thành </h1>.

Lỗi 5: Dòng 9 — Thẻ kết thúc của <a> bị viết sai thẻ mở — Cách sửa: Sửa <a> ở cuối thành </a>.

Lỗi 6: Dòng 16 — Thuộc tính src của ảnh thiếu dấu ngoặc kép và thẻ <img> chưa đóng — Cách sửa: Sửa thành <img src="iphone.jpg" alt="iPhone 16 Pro">.

Lỗi 7: Dòng 18 — Thẻ <b> và <p> bị đóng sai thứ tự (lồng nhau sai) — Cách sửa: Sửa thành <p>Giá: <b>25.990.000đ</b></p>.

Lỗi 8: Dòng 22-29 — Bảng dữ liệu thiếu thẻ cấu trúc <thead> và <tbody> — Cách sửa: Thêm <thead> cho hàng tiêu đề và <tbody> cho hàng nội dung.

Lỗi 9: Dòng 33 — Lạm dụng thẻ <main> lần thứ hai (Mỗi trang chỉ có duy nhất một thẻ main) — Cách sửa: Đổi thẻ <main> thứ hai thành <aside>.

Lỗi 10: Dòng 37 — Thẻ <p> ở footer chưa đóng — Cách sửa: Thêm thẻ đóng </p>.

Bài B4:
1.
1.1
Thẻ <header>
Vị trí: Nằm ở phần đầu trang web (thanh màu vàng chứa logo, ô tìm kiếm).
Công dụng: Bao bọc khu vực nhận diện thương hiệu và các công cụ điều hướng chính của trang.

Thẻ <footer>
Vị trí: Nằm ở cuối cùng của trang web (sau khi kéo xuống hết trang).
Công dụng: Chứa các thông tin về bản quyền, liên hệ, chính sách, và địa chỉ công ty.

Thẻ <section>
Vị trí: Các khối nội dung ở giữa trang (ví dụ: khối "Săn sale đón lễ", "Điện thoại nổi bật").
Công dụng: Phân chia trang web thành các khu vực nội dung độc lập, giúp trình duyệt hiểu được cấu trúc của các phần trong trang.
1.2
Table đó hiển thị nội dung gì?
Trả lời: Table này hiển thị bảng Thông số kỹ thuật chi tiết của sản phẩm (ví dụ: Kích thước màn hình, độ phân giải camera, hệ điều hành, dung lượng RAM, pin...).

Có dùng <thead>, <tbody> không?
Trả lời: Qua kiểm tra mã nguồn (Inspect), table này CÓ sử dụng thẻ <tbody> để bao bọc các hàng dữ liệu (<tr>). Tuy nhiên, trang web KHÔNG sử dụng thẻ <thead> (nguyên nhân là do thiết kế bảng của họ không có hàng tiêu đề trên cùng, mà thay vào đó các tên tiêu chí nằm ở cột bên trái).
2.
2.1
Mở tab Elements, tìm 1 <table> trên trang. Chụp screenshot và trả lời:
<table> nằm dưới tiêu đề:

“Bảng so sánh thông số kỹ thuật giữa iPhone 16 256GB và iPhone 17 256GB”
Vì vậy, bảng này dùng để:
So sánh các thông số kỹ thuật giữa các sản phẩm
Ví dụ: màn hình, RAM, pin, camera,...
2.2
Có dùng <thead>, <tbody> không?
Có <tbody> (đã thấy trong DevTools)
Không thấy <thead>

Kết luận:
Bảng chưa sử dụng semantic đầy đủ
Thiếu <thead> để định nghĩa phần tiêu đề bảng
3.
3.1
Action: /tim-kiem
Method: GET
Input types:
text (nhập từ khóa)
submit (nút tìm kiếm)

Phần C:
Câu c1:
[text](C1.html)
Câu c2:
-Quan điểm “chỉ dùng <div> + class là đủ” nghe có vẻ tiện, nhưng về kỹ thuật thì không tối ưu. Thứ nhất là SEO: các công cụ tìm kiếm như Google dựa vào cấu trúc semantic (như <header>, <article>, <nav>) để hiểu nội dung trang. Nếu mọi thứ đều là <div>, bot phải đoán ý nghĩa thông qua class hoặc text, dẫn đến việc index kém chính xác hơn. Thứ hai là accessibility: các công nghệ hỗ trợ như Screen reader (ví dụ NVDA, VoiceOver) sử dụng semantic HTML để đọc và điều hướng nội dung. Khi dùng đúng thẻ, người khiếm thị có thể nhảy nhanh giữa các phần như menu (<nav>) hay nội dung chính (<main>), thay vì phải nghe toàn bộ trang.
-Ví dụ cụ thể: một trang chi tiết sản phẩm dùng <table> cho thông số kỹ thuật với <thead> và <tbody> sẽ giúp cả trình duyệt lẫn screen reader hiểu rõ đâu là tiêu đề cột và đâu là dữ liệu. Nếu thay bằng <div>, cấu trúc này bị mất, gây khó khăn khi đọc hoặc phân tích.
-Tuy nhiên, không phải lúc nào <div> cũng xấu. Trong thực tế, <div> vẫn rất phù hợp để chia layout hoặc nhóm các phần tử không có ý nghĩa nội dung rõ ràng, ví dụ container cho grid hoặc flexbox. Vì vậy, cách đúng không phải là loại bỏ <div>, mà là kết hợp semantic HTML với <div> một cách hợp lý để vừa rõ nghĩa, vừa linh hoạt trong thiết kế.