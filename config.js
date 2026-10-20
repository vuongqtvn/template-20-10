/* ======= CHỈ CẦN SỬA FILE NÀY ======= */
/* Toàn bộ dữ liệu dưới đây là placeholder, thay bằng nội dung thật của bạn. */
const NAME = "Tên người nhận";        // tên người nhận quà
const FROM = "Tên bạn";               // chữ ký cuối trang
// Ảnh: bỏ file vào thư mục images/ rồi sửa đường dẫn. Để mảng rỗng [] nếu không muốn có phần ảnh.
const PHOTOS = [
  "images/photo-01.svg", "images/photo-02.svg", "images/photo-03.svg",
  "images/photo-04.svg", "images/photo-05.svg", "images/photo-06.svg"
];
const CAPTIONS = ["Chú thích ảnh 1", "Chú thích ảnh 2", "Chú thích ảnh 3", "Chú thích ảnh 4"];
const INTRO_TEXT = "Đây là đoạn lời chúc mở đầu. Thay bằng lời chúc của bạn dành cho người nhận nhé.";
// Mỗi bông hoa là một lời chúc (icon + text). Thêm/bớt tuỳ ý.
const WISHES = [
  { icon: "🌸", text: "Lời chúc số 1 — thay bằng nội dung của bạn." },
  { icon: "🌷", text: "Lời chúc số 2 — thay bằng nội dung của bạn." },
  { icon: "🌹", text: "Lời chúc số 3 — thay bằng nội dung của bạn." },
  { icon: "🌺", text: "Lời chúc số 4 — thay bằng nội dung của bạn." },
  { icon: "🌻", text: "Lời chúc số 5 — thay bằng nội dung của bạn." },
  { icon: "🪷", text: "Lời chúc số 6 — thay bằng nội dung của bạn." },
  { icon: "💐", text: "Lời chúc số 7 — thay bằng nội dung của bạn." },
  { icon: "🌼", text: "Lời chúc số 8 — thay bằng nội dung của bạn." }
];
const FINAL = "Đây là thông điệp hiện ra khi hái hết hoa. Thay bằng nội dung của bạn 💖";
// Câu đố: answer là vị trí đáp án đúng (0 = đáp án đầu tiên).
const QUIZ = [
  { q: "Câu hỏi số 1?", options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"], answer: 0 },
  { q: "Câu hỏi số 2?", options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"], answer: 1 },
  { q: "Câu hỏi số 3?", options: ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"], answer: 2 }
];
const LETTER = `Gửi bạn,

Đây là nội dung lá thư bí mật. Thay bằng lời nhắn của bạn.
Mỗi dòng trống sẽ thành một đoạn mới.

Ký tên ❤️`;
const WISH_REPLY = "Điều ước đã bay lên trời rồi ✨ Đây là lời đáp sau khi thả đèn, thay bằng nội dung của bạn.";
// Nhạc phát khi trả lời đúng hết câu đố. Bỏ file .mp3 vào thư mục mp3/; nếu không có file thì site bỏ qua, không lỗi.
const MUSIC = "mp3/music.mp3";
/* ===================================== */
