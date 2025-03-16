console.log("start");

// async function a () {
//     await new Promise(() => {
//         let sum = 0;

//         for (let i = 0; i < 1000000000; i++) {
//             sum = sum + i;
//         }
//         console.log(sum);
//     });
// }


async function a () {
    await new Promise(() => {
        setTimeout(() => {
            let sum = 0;
    
            for (let i = 0; i < 1000000000; i++) {
                sum += i;
            }
            console.log(sum);
        }, 2000);
    });
}

a();
console.log("end");

// async await is a way to handle async code in a synchronous way