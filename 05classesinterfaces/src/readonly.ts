// there's a shortcut to initialising in typescript along with 
// access modifiers. Using the example below we won't need to declare
// fields using field syntax and assign them within the parameters passed
// into the constructor function
class Vehicle {
    // private name: string;
    // private passengers: string[];

    // you can also add readonly here to prevent the value from being
    // changed after it is initialised
    constructor(private readonly name: string, private passengers: string[]) {
        // this.name = name;
        // this.passengers = passengers;
    }

    describe(this: Vehicle) {
        console.log(`Vehicle name: ${this.name}, passengers: ${this.passengers}`);
    }

    changeVehicleName(newName: string) {
        // this line will throw an error because we've set the name as
        // readonly in the constructor function above
        // this.name = newName;
        console.log(`can\'t change the name of the vehicle to ${newName} as it\'s readonly`);
    }
}

const passengers: string[] = [ 'Jimmy', 'Shirley' ];

const car = new Vehicle('Baymax', passengers);

car.describe();
car.changeVehicleName('Waymax');
