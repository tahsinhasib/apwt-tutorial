const a = [2,3,4,6];
// const b = [7];

console.log(a);
// console.log(b);

const b = [...a, 7];
console.log(b);

const car = {
    name: "BMW",
    model: "X5",
    color: "black"
}


const mCar = {
    color: "white",
}


const lcar = { ...car, ...mCar };
console.log(lcar);      //  only color will be updated


const car1 = ["BMW", "X5", "black"];

const [suv,, sed] = car1;
// const [suv, sed] = car1;
console.log(suv);
console.log(sed);
