// Mảng
let numbers = [1, 2, 3, 4];
let fruits: string[] = ["apple", "banana", "orange"];
let postIds: (string | number)[] = ["caugiay", 99, "yenhoa"];

/** Sửa lỗi */
// let items = ['pen', 'book'];
// items[1] = 99;
// items.unshift(100);

// Tuple: một mảng có độ dài cố định, trong đó kiểu của từng phần tử được xác định riêng biệt.
let person: [string, number, boolean];
person = ["John", 25, true];
let employeeName = person[0];

/** Sửa lỗi */
// let point: [number, number];
// point = [10, 20, 30];
// const lastPoint = point[3]

// Object
type Person = {
    name: string;
    weight: number;
    isMarried?: boolean;
};

interface Employee {
    employeeName: string;
    employeeCode: string;
    salary?: number;
    isBoss?: boolean;
}

interface Engineer extends Employee {
    technical: string;
}

let singer: Person = {
    name: "Jack",
    weight: 68,
};

const greetPerson = (person: Person) => {
    return `Hello ${person.name}${person.isMarried ? ", I'am married" : ""}`;
};

console.log(greetPerson(singer));

/** Sửa lỗi */
// let marry: Employee = {
//     employeeName: "Marry",
//     employeeCode: "00001",
//     salary: 10000,
//     isBoss: false,
// };

// let nextEmployee = {
//     employeeName: 'anonymous',
//     employeeCode: "00002",
//     salary: 20000,
//     isBoss: true,
// }

// nextEmployee = marry;

// enum: Khi biên dịch enum sẽ được dịch ra mã javascript
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

console.log(Direction.Up);

enum Status {
  Success = 1,
  Failure = "FAIL",
}