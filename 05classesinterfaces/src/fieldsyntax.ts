class Person {
    // this is new syntax that only exists in ES6, called field syntax
    // because you're declaring the field outside the constructor.
    // normally you just add it to the constructor as this.{name} without
    // the need for this below
    name: string

    constructor(n: string) {
        this.name = n;
    }
}