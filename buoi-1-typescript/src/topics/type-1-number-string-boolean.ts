// các kiểu nguyên thủy: number, string, boolean, symbol, null, undefined.
// string and Regex
let username = "Jack"; // typescript có thể nhận diện kiểu dữ liệu thông qua giá trị khởi tạo (infer)
let userAddress: string =
    "Tầng 7, Tòa nhà Công ty 29, Ngõ 73 Nguyễn Trãi, Phường Khương Đình, TP. Hà Nội";

let reg = /\W+/g;
let validationPasswordReg: RegExp = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;

// number
const mathPoint = 10;
const englishPoint: number = 9;

const sum = (a: number, b: number) => {
    return a + b;
};

// boolean
let userStatus = true;
let isActive: number | boolean;

/** Sửa lỗi */
// let postId: string | number = 1000;
// let postAddress: string = "Bưu điện Cầu Giấy";

// const concat = (a, b) => {
//     return `${a} - ${b}`;
// };

// console.log(concat(postId, postAddress));

// literal type
let selectedItems: "book" | "board" | 100;

/** Sửa lỗi */
// selectedItems = 'pen';