
---

# 🧩1.3 Tổng quan: JavaScript Environment trong Browser

**JavaScript Environment** (môi trường JavaScript) trên trình duyệt bao gồm **nhiều thành phần hợp lại**, chứ không chỉ là engine.

---

# ⚙️ 1.3.1 **JavaScript Engine**

Đây là **trái tim** xử lý code ECMAScript.
Nó biên dịch và thực thi code JavaScript.

| Trình duyệt         | Engine JavaScript          |
| ------------------- | -------------------------- |
| Chrome / Edge (mới) | **V8**                     |
| Firefox             | **SpiderMonkey**           |
| Safari              | **JavaScriptCore (Nitro)** |
| Edge (cũ) / IE      | **Chakra**                 |

**Thành phần bên trong engine:**

* **Parser**: phân tích cú pháp mã nguồn JS thành AST (Abstract Syntax Tree)
* **Interpreter & JIT Compiler**: dịch code thành bytecode hoặc native code để tăng tốc
* **Memory Heap**: vùng lưu trữ object, closure, function,…
* **Call Stack**: nơi theo dõi hàm đang được gọi

---

# 🌐 1.3.2. **Web APIs** (do Browser cung cấp)

Đây là phần mở rộng mà ECMAScript không có.
Trình duyệt cung cấp hàng trăm API giúp JS tương tác với web, như DOM, sự kiện, mạng, và đồ họa.

| Nhóm API                           | Ví dụ                                                    | Vai trò                               |
| ---------------------------------- | -------------------------------------------------------- | ------------------------------------- |
| **DOM API**                        | `document.querySelector()`, `element.addEventListener()` | Truy cập và thao tác phần tử HTML     |
| **BOM API (Browser Object Model)** | `window`, `navigator`, `location`, `history`             | Làm việc với cửa sổ trình duyệt       |
| **Network API**                    | `fetch()`, `XMLHttpRequest`, `WebSocket`                 | Giao tiếp với server                  |
| **Timer API**                      | `setTimeout`, `setInterval`                              | Thực hiện lệnh định thời              |
| **Storage API**                    | `localStorage`, `sessionStorage`, `IndexedDB`            | Lưu dữ liệu cục bộ                    |
| **Graphics API**                   | `Canvas`, `WebGL`                                        | Vẽ đồ họa 2D/3D                       |
| **Audio/Video API**                | `MediaStream`, `WebRTC`, `AudioContext`                  | Xử lý âm thanh, video, truyền thông   |
| **Worker API**                     | `Web Worker`, `Service Worker`                           | Chạy JS song song (background thread) |

---

# 🔁 1.3.3. **Event Loop và Callback Queue**

Đây là **cơ chế điều phối** giúp JavaScript (vốn đơn luồng) vẫn xử lý được các tác vụ bất đồng bộ.

**Các thành phần chính:**

* **Event Loop**: liên tục kiểm tra nếu call stack trống thì đẩy task từ queue vào chạy.
* **Callback Queue**: chứa các callback sẵn sàng thực thi (ví dụ từ `setTimeout` hoặc sự kiện).
* **Microtask Queue**: chứa promise, mutation observer, v.v.

---

# 🎨 1.3.4. **Rendering Engine**

Đây không thuộc JavaScript trực tiếp, nhưng nằm trong cùng môi trường.
Engine này chịu trách nhiệm:

* Phân tích HTML, CSS
* Xây dựng **DOM Tree** và **Render Tree**
* Tính toán layout, vẽ (paint) và hiển thị lên màn hình

| Trình duyệt               | Rendering Engine |
| ------------------------- | ---------------- |
| Chrome, Edge (mới), Opera | **Blink**        |
| Firefox                   | **Gecko**        |
| Safari                    | **WebKit**       |

JavaScript có thể tương tác với rendering engine thông qua DOM API — ví dụ thay đổi `element.style` sẽ khiến engine re-render.

---

# 🧠 1.3.5. **Tóm tắt toàn cảnh**

| Thành phần                                  | Vai trò chính                                                                 |
| ------------------------------------------- | ----------------------------------------------------------------------------- |
| **ECMAScript Engine (V8, SpiderMonkey, …)** | Thực thi cú pháp và logic của ngôn ngữ JS                                     |
| **Web APIs**                                | Cung cấp các tính năng bổ sung từ trình duyệt (DOM, Fetch, Timer, Storage, …) |
| **Event Loop & Task Queue**                 | Điều phối các tác vụ bất đồng bộ                                              |
| **Rendering Engine**                        | Hiển thị nội dung HTML/CSS, phản ứng với thay đổi từ JS                       |

---

# 📘 Tóm gọn hình ảnh hóa:

```text
           ┌────────────────────────────┐
           │   JavaScript Environment   │
           └────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │             │            │
   [ECMAScript]   [Web APIs]   [Event Loop]
        │             │            │
   JS Engine     Browser API   Task Handling
        │
   Execution Stack
        │
   Interaction via DOM & BOM
```

---

👉 **Kết luật:**

> JavaScript trong trình duyệt không chỉ là ngôn ngữ ECMAScript, mà là **một hệ sinh thái gồm engine + API + event loop + rendering engine** — tất cả cùng phối hợp để tạo nên hành vi bạn thấy khi web chạy.

---
# 1.3.6. Cách hoạt động: 
[https://www.youtube.com/watch?v=eiC58R16hb8](https://www.youtube.com/watch?v=eiC58R16hb8)