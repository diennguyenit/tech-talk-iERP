// Index Signature trong TypeScript cho phép bạn định nghĩa kiểu cho key và value của một object có số lượng hoặc tên thuộc tính không cố định.

// Dùng interface
interface MyObject {
    [key: string]: number;
}

interface ProductDictionary {
  [productId: string]: {
    name: string;
    price: number;
  };
}

const products: ProductDictionary = {
  p001: { name: "iPhone", price: 999 },
  p002: { name: "Galaxy", price: 899 },
};

// Dùng type utility
type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>;


/** Sửa lỗi */

// interface Item {
//     [key: string]: string;
//     name: string;
//     weight: number;
// }

