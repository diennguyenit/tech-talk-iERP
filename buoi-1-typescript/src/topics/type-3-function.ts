const logMsg = (value: any) => {
    console.log(value);
};

// Định nghĩa kiểu kiểu
type AddFn = (num1: number, numb2: number) => number;
type AddFnObjectSignature = {
    (num1: number, numb2?: number): number;
};

const add: AddFn = (num1: number, numb2: number) => {
    return num1 + numb2;
};

/** sửa lỗi */
// const addSignature: AddFnObjectSignature = (num1: number, numb2?: number) => {
//     return num1 + numb2;
// };
