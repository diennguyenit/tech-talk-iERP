"use strict";
// Mảng
var numbers = [1, 2, 3, 4];
var fruits = ["apple", "banana", "orange"];
var postIds = ["caugiay", 99, "yenhoa"];
/** Sửa lỗi */
// let items = ['pen', 'book'];
// items[1] = 99;
// items.unshift(100);
// Tuple: một mảng có độ dài cố định, trong đó kiểu của từng phần tử được xác định riêng biệt.
var person;
person = ["John", 25, true];
var employeeName = person[0];
var singer = {
    name: "Jack",
    weight: 68,
};
var greetPerson = function (person) {
    return "Hello " + person.name + (person.isMarried ? ", I'am married" : "");
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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Up);
var Status;
(function (Status) {
    Status[Status["Success"] = 1] = "Success";
    Status["Failure"] = "FAIL";
})(Status || (Status = {}));
