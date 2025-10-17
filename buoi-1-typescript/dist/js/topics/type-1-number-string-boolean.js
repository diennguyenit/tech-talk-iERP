"use strict";
// các kiểu nguyên thủy: number, string, boolean, symbol, null, undefined.
// string and Regex
var username = "Jack"; // typescript có thể nhận diện kiểu dữ liệu thông qua giá trị khởi tạo (infer)
var userAddress = "Tầng 7, Tòa nhà Công ty 29, Ngõ 73 Nguyễn Trãi, Phường Khương Đình, TP. Hà Nội";
var reg = /\W+/g;
var validationPasswordReg = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
// number
var mathPoint = 10;
var englishPoint = 9;
var sum = function (a, b) {
    return a + b;
};
// boolean
var userStatus = true;
var isActive;
/** Sửa lỗi */
// let postId: string | number = 1000;
// let postAddress: string = "Bưu điện Cầu Giấy";
// const concat = (a, b) => {
//     return `${a} - ${b}`;
// };
// console.log(concat(postId, postAddress));
// literal type
var selectedItems;
/** Sửa lỗi */
// selectedItems = 'pen';
