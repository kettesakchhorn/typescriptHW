interface Teacher {
    firstName: string,
    lastName: string,
}
function displayTeacher(teacher: Teacher) {
    let firstName = teacher.firstName;
    let lastName = teacher.lastName;
    console.log("Teacher's name is " + firstName + " " + lastName)
}

displayTeacher({
    firstName: "John",
    lastName: "Doe",
})