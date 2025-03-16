console.log("start");

// function a () {
//     let sum = 0;

//     for (let i = 0; i < 1000000000; i++) {
//         sum += i;
//     }
//     console.log(sum);
// }

function a () {
    setTimeout(() => {
        let sum = 0;

        for (let i = 0; i < 1000000000; i++) {
            sum += i;
        }
        console.log(sum);
    }, 2000);
}


a();    
console.log("end");

// during setTimeout, the event loop will continue to run the next line of code
// so, the next line of code will be executed   
// setTimeout is a non-blocking code
// setTimeout is an async function
// setTimeout is a web api
// setTimeout is a callback function
// setTimeout is a higher order function