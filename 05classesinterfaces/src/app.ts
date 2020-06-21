// Let's say we have a Subject class that allows you to add students to an
// array list of strings as well as print information about the students in
// that string array list.
class Subject {
    private name: string;

    // however we don't want people modifying or accessing these properties
    // or even some methods directly from the object instance.
    // by puttng in private, ts will limit them to being only accessible
    // from within the class.
    
    // There are two other access modifiers and we'll
    // look at them later (protected and readonly). Access modifies can be
    // applied to both fields and methods.
    private students: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: Subject) {
        console.log('Class Name:', this.name);
    }

    addStudent(student: string) {
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

// won't work because the student's array is private
// physics101.students[2] = 'John';

// also won't work for the same reason.
// physics101.name = 'CompSci101';
