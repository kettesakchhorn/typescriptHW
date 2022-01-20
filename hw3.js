var School = /** @class */ (function () {
    function School(schoolName, departments, location, numberOfStudents) {
        this.schoolName = schoolName;
        this.departments = departments;
        this.location = location;
        this.numberOfStudents = numberOfStudents;
    }
    School.prototype.changeDetails = function (schoolName, departments, location, numberOfStudents) {
        this.schoolName = schoolName;
        this.departments = departments;
        this.location = this.location;
        this.numberOfStudents = numberOfStudents;
    };
    School.prototype.printDetails = function () {
        console.log("School Name: " + this.schoolName + "\n" + "Departments currently active: " + this.departments + " \n" + "Location: " + this.location + " \n" + "Number of students in total: " + this.numberOfStudents);
    };
    return School;
}());
var KIT = new School("Kirirom Institute of Technology", "DSE, DAR, DTM", "Kompong Speu", 500);
KIT.printDetails();
