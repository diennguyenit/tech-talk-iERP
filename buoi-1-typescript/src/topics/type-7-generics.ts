// Generic (kiểu tổng quát) trong TypeScript cho phép bạn định nghĩa một thành phần (function, class, interface, type)
// mà kiểu dữ liệu chưa được xác định trước, và sẽ được truyền vào sau khi sử dụng.

// dùng với function
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const nums = [1, 2, 3];
const first = getFirstElement(nums); // T = number, first: number

const strs = ["a", "b", "c"];
const firstStr = getFirstElement(strs); // T = string, firstStr: string

// dùng với interface
interface ApiResponse<T> {
    data: T;
    error?: string;
}

const response: ApiResponse<number[]> = {
    data: [1, 2, 3],
};

/** sửa lỗi */

// interface HasWeight {
//     weight: number;
// }

// type IWeightFn<T> = (item: T) => T & HasWeight;

// interface Chicken {
//     name: string;
// }

// let rooter: Chicken = {
//     name: "rooter",
// };

// function weightFn<T>(item: T): T & HasWeight {
//     return {
//         ...item,
//     };
// }
