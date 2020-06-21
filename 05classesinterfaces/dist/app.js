"use strict";
class Subject {
    constructor(n) {
        this.students = [];
        this.name = n;
    }
    describe() {
        console.log('Class Name:', this.name);
    }
    addStudent(student) {
        this.students.push(student);
    }
    printStudentInformation() {
        console.log(this.students.length);
        console.log(this.students);
    }
}
const physics101 = new Subject('Physics101');
physics101.addStudent('Jimmy');
physics101.addStudent('Shirley');
physics101.printStudentInformation();
//# sourceMappingURL=app.js.map