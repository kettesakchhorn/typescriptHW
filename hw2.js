function displayTeacher(teacher) {
    var firstName = teacher.firstName;
    var lastName = teacher.lastName;
    console.log("Teacher's name is " + firstName + " " + lastName);
}
displayTeacher({
    firstName: "John",
    lastName: "Doe"
});
