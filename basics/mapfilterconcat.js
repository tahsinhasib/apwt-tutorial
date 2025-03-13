// map
const a = [3,4,5]
const b = a.map(x => x * 2)
console.log(b) // [6, 8, 10]


// reduce
const c = [3,4,5]
const d = c.filter(x => x % 2 == 0)
console.log(d) // [4]

// concat
const e = "AIUB"
console.log(e[0]) // A
const f = " Is my first home"

console.log(e + f) // AIUB Is my first home
console.log(e.concat(f)) // AIUB Is my first home
console.log(e.concat(f.replace("first", "loving"))) // AIUB Is my loving home