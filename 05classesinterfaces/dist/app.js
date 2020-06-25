"use strict";
class Vehicle {
    constructor(name, passengers) {
        this.name = name;
        this.passengers = passengers;
    }
    describe() {
        console.log(`Vehicle name: ${this.name}, passengers: ${this.passengers}`);
    }
    changeVehicleName(newName) {
        console.log(`can\'t change the name of the vehicle to ${newName} as it\'s readonly`);
    }
}
const passengers = ['Jimmy', 'Shirley'];
const car = new Vehicle('Baymax', passengers);
car.describe();
car.changeVehicleName('Waymax');
//# sourceMappingURL=app.js.map