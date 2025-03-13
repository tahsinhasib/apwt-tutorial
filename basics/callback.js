class a {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        setTimeout(() => {
            console.log(this.name);
        }, 5000);
    }
}

const ab = new a("Tahsin");
console.log(ab.name);       // Tahsin
ab.sayHello();              // expected output: Tahsin (after 5 seconds)


