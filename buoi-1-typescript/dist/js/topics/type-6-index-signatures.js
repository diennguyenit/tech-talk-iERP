"use strict";
// Index Signature trong TypeScript cho phép bạn định nghĩa kiểu cho key và value của một object có số lượng hoặc tên thuộc tính không cố định.
var products = {
    p001: { name: "iPhone", price: 999 },
    p002: { name: "Galaxy", price: 899 },
};
/** Sửa lỗi */
// interface Item {
//     [key: string]: string;
//     name: string;
//     weight: number;
// }
// keyof 
