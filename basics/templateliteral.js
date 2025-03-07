const name = 'John';
console.log(`Hello ${name}`);

const a = (name='John') => `Hello ${name}`;
console.log(a());

// `Hello ${name}` = Hello John
// 'Hello ${name}' = Hello ${name}

console.log(a("Doe"));  // overriding the default value of name