let a = [2,3,5]

console.log('index');
for (let i in a) {
    console.log(i);
}

console.log('value');
for (let i in a) {
    console.log(a[i]);
}


console.log('forEach');
a.forEach((element, index, array) => {
    console.log(element, index, array);
});


// ab of a
console.log('ab of a');
for (let ab of a) {
    console.log(ab);
}

// ab in a
console.log('ab in a');
for (let ab in a) {
    console.log(ab);
}