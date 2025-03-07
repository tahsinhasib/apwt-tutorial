console.log('function type - 1');


function a(m, n) {
    return m * n;
}

console.log(a(2, 3)); 


console.log('function type - 2');

a = () => {}; //arrow function
console.log(a);


func = () => "hello"
console.log(func());