"use strict";
class Computer {
    constructor(serialNumber, cpu = "intel", ram = "hynix", gpu = "nvidia") {
        this.serialNumber = serialNumber;
        this.cpu = cpu;
        this.ram = ram;
        this.gpu = gpu;
        this.ssd = [];
    }
    describe() {
        console.log(`serialNumber ${this.serialNumber} cpu ${this.cpu} hdd ${this.ram} gpu ${this.gpu}`);
    }
    writeHdd(value) {
        this.ssd.push(value);
    }
}
class Macbook extends Computer {
    constructor(id, fingerprintReader) {
        super(id);
        this.fingerprintReader = fingerprintReader;
    }
}
class Surfacebook extends Computer {
    constructor(id, digitalPen) {
        super(id);
        this.digitalPen = digitalPen;
    }
}
const jimmysMacbook = new Macbook(5, true);
const jimmysSurfacebook = new Surfacebook(1, false);
console.log('jimmysmacbook', jimmysMacbook);
console.log('jimmyssurfacebook', jimmysSurfacebook);
//# sourceMappingURL=app.js.map