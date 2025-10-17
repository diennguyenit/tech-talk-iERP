// Type Assertion là một khái niệm quan trọng trong TypeScript, thường được hiểu là “khẳng định kiểu dữ liệu”
// Type Assertion cho phép bạn nói với TypeScript rằng: “Tôi biết rõ kiểu dữ liệu này hơn bạn.”

// Cách 1: dùng as
let value = "Hello" as string;

// Cách 2: dùng dấu ngoặc nhọn <>
let greet = <string>"Hello";

const input = document.getElementById("username") as HTMLInputElement;

console.log(input.value);

/** Sửa lỗi */
// interface IBird {
//     canFly: boolean;
//     flyHeight?: number;
// }

// interface IParrot extends IBird {
//     sound: string;
// }

// interface Insec {
//     insectType: string;
// }

// let mimi: IBird = {
//     canFly: true,
//     flyHeight: 10,
// };

// let noa: IParrot = {
//     canFly: true,
//     flyHeight: 20,
//     sound: "hello",
// };

// let bunky: Insec = {
//     insectType: "spider",
// };

// noa = mimi;
// mimi = bunky;
