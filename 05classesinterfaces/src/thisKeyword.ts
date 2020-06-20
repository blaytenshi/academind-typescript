class Department {
    name: string;

    constructor(n: string) {
        this.name = n;
    }

    // the 'this' as the first parameter is not actually the first parameter
    // but a hint to ts that the 'this' within the body of the function
    // should refer to a Department class type
    describe(this: Department, descriptionPrefix: string) {
        console.log(descriptionPrefix + this.name);
    }
}

const accountingDepartment = new Department('Accounting');

accountingDepartment.describe('Department: ');

// what does providing the 'this' in the describe() function do?
// it prevents you from adding the method to an incompatible object.
// Eg: we create a fakeDepartment object with object literal syntax (which
// in not an instance of the Department class due to prototype chains)
// and assign the accountingDepartment's describe function to the describe
// property. This is valid javascript
const fakeDepartment = { describe: accountingDepartment.describe }

// but when we try to invoke the function, it won't work because ts will
// check that the describe function's 'this' is Department. But it isn't! It is
// Object!
// fakeDepartment.describe('Fake Department: ');
