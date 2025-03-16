// if there's a logical part of the code that can be executed asynchronously, we can use promises to handle it
// promises are a way to handle asynchronous code
// promises are a way to handle async code in a synchronous way

console.log("start");

const a = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Done");
    } else {
        reject("Not Done");
    }
});


a
.then((message) => console.log("message"))
.catch((message) => console.log("error"))

console.log("end");


// promises are a way to handle async code in a synchronous way