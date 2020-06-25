class Computer {

    private readonly ssd: string[] = [];

    constructor(
        private readonly serialNumber: number,
        private readonly cpu: string = "intel", 
        private readonly ram: string = "hynix", 
        private readonly gpu: string = "nvidia"
    ) {

    }

    describe() {
        console.log(`serialNumber ${this.serialNumber} cpu ${this.cpu} hdd ${this.ram} gpu ${this.gpu}`);
    }

    writeHdd(value: string) {
        this.ssd.push(value);
    }
}

class Macbook extends Computer {
    // let's create an os variable only found in macbooks
    fingerprintReader: boolean;

    // if you don't declare your own constructor function, it will use
    // the base class's constructor as the default

    // if you do declare your own constructor function you need to call
    // super as it is needed by js
    constructor(id: number, fingerprintReader: boolean) {
        super(id);
        // any references to 'this' must be called after the super() call
        // as it will overwrite/add to the fields/fuctions of the object 
        // returned by super()
        this.fingerprintReader = fingerprintReader;
    }
}

class Surfacebook extends Computer {
    digitalPen: boolean;

    constructor(id: number, digitalPen: boolean) {
        super(id);
        this.digitalPen = digitalPen;
    }
}

const jimmysMacbook = new Macbook(5, true);
const jimmysSurfacebook = new Surfacebook(1, false);

console.log('jimmysmacbook', jimmysMacbook);
console.log('jimmyssurfacebook', jimmysSurfacebook);
