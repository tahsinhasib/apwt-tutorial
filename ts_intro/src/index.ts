// command for execution
// tsc "c:\Users\Tahsin\Desktop\apwt-tutorial\ts_intro\index.ts"

let age: number = 70

if (age > 20) {
    age = age + 1
}

console.log(age)


let a:number[] = [1,2,3,4,5]
console.log(a[0]);

let person: {name: string; age: number} = {name: "Tahsin", age: 22}
console.log(person.age);

function add(a: number, b: number): number {
    return a + b
}
console.log(add(2,3));

//any
let value: any = 5
value = "Tahsin"
console.log(value);


//enum
//role based authentication
enum Role {Admin, User, Guest}
let userRole: Role = Role.Admin
console.log(userRole);

//tuple
let tup: [string, number] = ["Tahsin", 22]
console.log(tup[0]);

//type alias
type id = number | string | boolean
let studentId: id = 123
console.log(studentId);
let guestId: id = "abc"
console.log(guestId);
let adminId: id = true
console.log(adminId);

//type union
let tu: string | number
tu = "Tahsin"
console.log(tu);
tu = 22
console.log(tu);

let tu1: "success" | "error"
tu1 = "success"
console.log(tu1);
//tu1 = "pending" error code


//interface
interface Iuser {
    name: string,
    age: number
}

let G: Iuser = {
    name: "Tahsin Interface",
    age: 22
}

console.log(G);
console.log(G.name);