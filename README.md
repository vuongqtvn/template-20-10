# Template quà tặng (20/10, Valentine, sinh nhật…)

Một trang web quà tặng lãng mạn, chạy thuần HTML/CSS/JS. Không cần build, không cần cài đặt. Chỉ cần sửa một file cấu hình là có trang quà của riêng bạn.

> Toàn bộ nội dung và ảnh trong repo này là **dữ liệu giả (placeholder)**. Hãy thay bằng nội dung thật của bạn.

## Tính năng

- **Màn mở quà**: trái tim đập, chạm để mở, kèm hiệu ứng nở hoa.
- **Cánh hoa rơi** trên nền, chạm hoặc kéo ngón tay để rắc thêm hoa và tim.
- **Lời chúc gõ chữ** ở đầu trang.
- **Hái hoa**: mỗi bông hoa là một lời chúc, hái hết sẽ hiện thông điệp cuối.
- **Album polaroid**: chạm vào ảnh để lật, mặt sau là chú thích.
- **Câu đố kỷ niệm**: trả lời đúng hết để mở lá thư bí mật, kèm phong bì mở ra và chữ ký viết tay.
- **Nhạc nền**: phát khi trả lời đúng câu đố cuối (có nút bật/tắt).
- **Thả đèn ước nguyện**: nhập điều ước, đèn bay lên trời.
- Giao diện responsive cho điện thoại, tôn trọng `prefers-reduced-motion`.

## Cấu trúc thư mục

```
.
├── index.html     # Giao diện và logic (thường không cần sửa)
├── config.js      # TOÀN BỘ nội dung cần thay, sửa file này
├── images/        # Ảnh album (mẫu là SVG placeholder)
├── mp3/           # Đặt music.mp3 vào đây (tuỳ chọn)
└── README.md
```

## Bắt đầu nhanh

1. Clone repo:
   ```bash
   git clone git@github.com:vuongqtvn/template-20-10.git
   cd template-20-10
   ```
2. Mở `config.js` và sửa các biến (xem bảng bên dưới).
3. Thêm ảnh vào `images/`, nhạc vào `mp3/music.mp3` (nếu muốn).
4. Xem thử: mở thẳng `index.html`, hoặc chạy server local:
   ```bash
   python3 -m http.server 8000
   # mở http://localhost:8000
   ```

## Các biến trong `config.js`

| Biến | Kiểu | Ý nghĩa |
|------|------|---------|
| `NAME` | string | Tên người nhận, hiện ở màn mở quà và tiêu đề |
| `FROM` | string | Tên bạn, dùng làm chữ ký cuối trang và cuối thông điệp |
| `PHOTOS` | string[] | Danh sách đường dẫn ảnh. Để `[]` thì ẩn cả phần album |
| `CAPTIONS` | string[] | Chú thích mặt sau ảnh, xoay vòng nếu ít hơn số ảnh |
| `INTRO_TEXT` | string | Lời chúc mở đầu, hiện theo kiểu gõ chữ |
| `WISHES` | `{icon, text}[]` | Mỗi phần tử là một bông hoa và lời chúc của nó |
| `FINAL` | string | Thông điệp hiện ra khi hái hết hoa |
| `QUIZ` | `{q, options, answer}[]` | Câu đố. `answer` là vị trí đáp án đúng, tính từ 0 |
| `LETTER` | string (template literal) | Nội dung lá thư. Dòng trống sẽ thành đoạn mới |
| `WISH_REPLY` | string | Lời đáp sau khi người nhận thả đèn |
| `MUSIC` | string | Đường dẫn file nhạc, mặc định `mp3/music.mp3` |

Ví dụ một câu đố:

```js
{ q: "Mình gặp nhau lần đầu ở đâu?", options: ["Quán cà phê", "Công viên", "Trường học", "Nhà bạn"], answer: 2 }
```

Số lượng hoa, ảnh, câu đố là tuỳ ý, thêm hoặc bớt phần tử trong mảng là được.

## Thay ảnh

1. Chép ảnh vào `images/` (nên dùng tỉ lệ dọc khoảng 3:4, dung lượng dưới 500 KB mỗi ảnh để tải nhanh trên điện thoại).
2. Sửa `PHOTOS` trỏ tới file mới, ví dụ `"images/anh-01.jpg"`.
3. Xoá các file `photo-0x.svg` mẫu nếu không dùng.

## Thay nhạc

Đặt file `.mp3` vào `mp3/` và sửa `MUSIC` nếu tên khác `music.mp3`. Nhạc chỉ phát sau khi người nhận trả lời đúng câu đố cuối, vì trình duyệt (đặc biệt iPhone/Safari) chỉ cho phát khi có thao tác chạm. Nếu không có file nhạc, trang bỏ qua và không báo lỗi trên giao diện (console có thể ghi 404).

## Tuỳ chỉnh giao diện

- **Màu sắc**: đổi các biến CSS trong khối `:root` ở đầu thẻ `<style>` của `index.html` (`--ink`, `--rose`, `--rose-soft`, `--gold`, …). Khối `:root` thứ hai, ngay sau phần "làm đẹp", ghi đè khối đầu, nên sửa ở khối đó.
- **Font**: đang dùng Be Vietnam Pro, Playfair Display và Great Vibes từ Google Fonts. Đổi ở thẻ `<link>` và biến `--serif`, `--script`.
- **Câu chữ cố định**: một số tiêu đề trong `index.html` chưa nằm trong `config.js`, ví dụ "Hái hoa tặng em", "Em có nhớ không?", "Chúc mừng ngày Phụ nữ Việt Nam". Hãy sửa trực tiếp nếu cần đổi dịp (Valentine, sinh nhật…) hoặc cách xưng hô.
- **Tiêu đề tab**: sửa thẻ `<title>`.

## Triển khai

Đây là site tĩnh, đưa lên đâu cũng được:

- **GitHub Pages**: Settings → Pages → chọn nhánh `main`, thư mục `/ (root)`.
- **Netlify / Vercel / Cloudflare Pages**: kéo thả thư mục hoặc nối repo, không cần lệnh build, thư mục publish là gốc repo.

## Lưu ý riêng tư

Ảnh và thư là nội dung cá nhân. Nếu để repo ở chế độ public thì ai cũng xem được. Hãy dùng repo private, hoặc chỉ đưa lên hosting rồi gửi đường link riêng cho người nhận.

## Kiểm tra sau khi sửa

- Mở trang trên điện thoại hoặc dùng chế độ giả lập thiết bị của trình duyệt.
- Chạm "mở quà", hái hết hoa, trả lời câu đố, thả một đèn.
- Mở DevTools → Console: không có lỗi đỏ ngoài 404 của file nhạc (nếu chưa thêm).
