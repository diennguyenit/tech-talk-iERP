
---
# Nội dung chia sẻ
Phần 1. Đặc tả ECMAScript ECMAScript, JavaScript runtime enviroment

Phần 2. Typescript, cách khai báo kiểu dữ liệu trong Typescript


# 🧩 Phần 1: Đặc tả ECMAScript, JavaScript runtime enviroment
# 1.1. Đặc tả ECMAScript
**ECMAScript** là **đặc tả kỹ thuật (technical specification)** được ban hành bởi tổ chức **ECMA International**, có mã hiệu là **ECMA-262**.
Đây là **chuẩn chính thức định nghĩa ngôn ngữ lập trình JavaScript**, tức là:

> ECMAScript mô tả cách ngôn ngữ hoạt động, còn JavaScript là một **cách triển khai (implementation)** cụ thể của ECMAScript.

**Tóm gọn:**

* ECMAScript = “bản thiết kế” của ngôn ngữ.
* JavaScript (trên trình duyệt, Node.js, Deno, v.v.) = “ngôi nhà” được xây dựa trên bản thiết kế đó.

---

## 🧑‍💻 Ai đề xuất và từ khi nào

* **Người đề xuất ban đầu:** Công ty **Netscape Communications**, nơi **Brendan Eich** đã sáng tạo ra **JavaScript** vào **năm 1995**.
  Khi đó, trình duyệt Netscape rất phổ biến, và Microsoft tạo ra một bản tương tự gọi là **JScript**, dẫn đến nguy cơ “chia rẽ” ngôn ngữ.

* Để thống nhất, **Netscape** đã gửi JavaScript cho **ECMA International** (một tổ chức tiêu chuẩn châu Âu) vào **năm 1996**,
  nhằm biến nó thành **một tiêu chuẩn mở** để các hãng phần mềm khác cùng tuân thủ.

* Kết quả: năm **1997**, ECMA công bố **phiên bản đầu tiên** của đặc tả:
  📘 **ECMA-262 1st Edition (ECMAScript 1)**.

---

## 🧱 Đặc tả ECMAScript “đặc tả cái gì”?

Đặc tả này **không mô tả môi trường thực thi** (browser, Node.js, …)
mà **chỉ mô tả bản thân ngôn ngữ**, bao gồm:

| Phần được đặc tả                       | Mô tả                                                                          |
| -------------------------------------- | ------------------------------------------------------------------------------ |
| **Lexical Grammar**                    | Quy tắc cú pháp, token, từ khóa (`let`, `if`, `function`, …)                   |
| **Types**                              | Các kiểu dữ liệu cơ bản (`Number`, `String`, `Boolean`, `Symbol`, `Object`, …) |
| **Execution Context & Scope**          | Cách chương trình thực thi, hoisting, scope chain                              |
| **Operators**                          | Các phép toán (`+`, `===`, `&&`, `??`, …)                                      |
| **Control Flow**                       | Cấu trúc điều khiển (`if`, `for`, `while`, `try...catch`, …)                   |
| **Objects & Prototypes**               | Mô hình kế thừa qua prototype                                                  |
| **Functions & Closures**               | Cách hoạt động của hàm, lexical environment                                    |
| **Modules (từ ES6)**                   | Cách import/export module                                                      |
| **Built-in Objects**                   | `Array`, `Date`, `Math`, `Promise`, `Map`, `Set`, …                            |
| **ECMAScript Language Host Interface** | Mối quan hệ giữa engine và môi trường chạy (browser, Node.js, …)               |

❗**Lưu ý:**

* ECMAScript **không bao gồm** những API như `document`, `window`, `console`, hay `fetch` → đó là phần của **Web API** (chuẩn của **W3C/WHATWG**).
* Cũng **không bao gồm** API của Node.js (như `fs`, `http`, …).

---

## 📜 Link phiên bản đầu tiên (ECMA-262, 1st Edition, 1997)

🔗 Bản chính thức lưu tại ECMA International:
👉 [https://ecma-international.org/publications-and-standards/standards/ecma-262/](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

📄 PDF trực tiếp:
[ECMA-262 1st Edition (PDF)](https://www.ecma-international.org/wp-content/uploads/ECMA-262_1st_edition_june_1997.pdf)

---

## 📘 Tóm tắt

| Thuộc tính                | Thông tin                                                             |
| ------------------------- | --------------------------------------------------------------------- |
| **Tên đầy đủ**            | ECMAScript Language Specification                                     |
| **Mã hiệu**               | ECMA-262                                                              |
| **Tổ chức ban hành**      | ECMA International                                                    |
| **Ủy ban kỹ thuật**       | TC39 (Technical Committee 39)                                         |
| **Người đề xuất ban đầu** | Netscape (1996)                                                       |
| **Phiên bản đầu tiên**    | ECMAScript 1 (1997)                                                   |
| **Đặc tả nội dung**       | Cú pháp, kiểu dữ liệu, mô hình thực thi, đối tượng gốc của ngôn ngữ   |
| **Triển khai tiêu biểu**  | JavaScript (browser), JScript (Microsoft), ActionScript (Adobe Flash) |

---

