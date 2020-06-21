// there's a shortcut to initialising in typescript along with 
// access modifiers. Using the example below we won't need to declare
// fields using field syntax and assign them within the parameters passed
// into the constructor function
class Vehicle {
    // private name: string;
    // private passengers: string[];

    constructor(private name: string, private passengers: string[]) {
        // this.name = name;
        // this.passengers = passengers;
    }

    describe(this: Vehicle) {
        console.log(`Vehicle name: ${this.name}, passengers: ${this.passengers}`);
    }
}

const passengers: string[] = [ 'Jimmy', 'Shirley' ];

const car = new Vehicle('Baymax', passengers);

car.describe();

