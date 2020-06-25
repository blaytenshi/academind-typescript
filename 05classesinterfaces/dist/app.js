"use strict";
class Computer {
    constructor(serialNumber, cpu = "intel", ram = "hynix", gpu = "nvidia", ssd = []) {
        this.serialNumber = serialNumber;
        this.cpu = cpu;
        this.ram = ram;
        this.gpu = gpu;
        this.ssd = ssd;
    }
    describe() {
        console.log(`serialNumber ${this.serialNumber} cpu ${this.cpu} hdd ${this.ram} gpu ${this.gpu}`);
    }
    writeHdd(value) {
        this.ssd.push(value);
    }
    readSsd() {
        console.log(this.ssd);
    }
}
class Macbook extends Computer {
    constructor(id, fingerprintReader) {
        super(id);
        this.fingerprintReader = fingerprintReader;
    }
    writeHdd(value) {
        if (value === 'Apple sux') {
            return;
        }
        this.ssd.push(value);
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
jimmysMacbook.writeHdd('Apple sux');
jimmysMacbook.writeHdd('Apple rulez');
console.log(jimmysMacbook.readSsd());
//# sourceMappingURL=app.js.map