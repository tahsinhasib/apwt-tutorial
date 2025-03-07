a = [2,3,5]

console.log('index');
for (let i in a) {
    console.log(i);
}

console.log('value');
for (let i in a) {
    console.log(a[i]);
}


console.log('all three');
a.forEach((element, index, array) => {
    console.log(element, index, array);
});