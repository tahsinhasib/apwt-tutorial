"use strict";
// command for execution
// tsc "c:\Users\Tahsin\Desktop\apwt-tutorial\ts_intro\index.ts"
let age = 70;
if (age > 20) {
    age = age + 1;
}
console.log(age);
let a = [1, 2, 3, 4, 5];
console.log(a[0]);
let person = { name: "Tahsin", age: 22 };
console.log(person.age);
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
//any
let value = 5;
value = "Tahsin";
console.log(value);
//enum
//role based authentication
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.Admin;
console.log(userRole);
//tuple
let tup = ["Tahsin", 22];
console.log(tup[0]);
let studentId = 123;
console.log(studentId);
let guestId = "abc";
console.log(guestId);
let adminId = true;
console.log(adminId);
//type union
let tu;
tu = "Tahsin";
console.log(tu);
tu = 22;
console.log(tu);
let tu1;
tu1 = "success";
console.log(tu1);
let G = {
    name: "Tahsin Interface",
    age: 22
};
console.log(G);
console.log(G.name);
//# sourceMappingURL=index.js.map