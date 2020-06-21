"use strict";
class Vehicle {
    constructor(name, passengers) {
        this.name = name;
        this.passengers = passengers;
    }
    describe() {
        console.log(`Vehicle name: ${this.name}, passengers: ${this.passengers}`);
    }
}
const passengers = ['Jimmy', 'Shirley'];
const car = new Vehicle('Baymax', passengers);
car.describe();
//# sourceMappingURL=app.js.map