"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe(descriptionPrefix) {
        console.log(descriptionPrefix + this.name);
    }
}
const accountingDepartment = new Department('Accounting');
accountingDepartment.describe('Department: ');
const fakeDepartment = { describe: accountingDepartment.describe };
//# sourceMappingURL=thisKeyword.js.map