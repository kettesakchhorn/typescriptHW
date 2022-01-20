class School{
    schoolName: string
    departments:string
    location:string
    numberOfStudents:number

    constructor(schoolName: string, departments:string, location: string, numberOfStudents: number){
        this.schoolName = schoolName
        this.departments = departments
        this.location = location 
        this.numberOfStudents = numberOfStudents
    }

    changeDetails(schoolName: string, departments:string, location: string, numberOfStudents: number){
        this.schoolName = schoolName
        this.departments = departments
        this.location = this.location 
        this.numberOfStudents = numberOfStudents
    }

    printDetails(){
        console.log("School Name: " + this.schoolName + "\n" + "Departments currently active: " + this.departments+" \n"+ "Location: " + this.location+" \n"+ "Number of students in total: " + this.numberOfStudents);
    }
}


let KIT:School = new School("Kirirom Institute of Technology", "DSE, DAR, DTM", "Kompong Speu", 500);
KIT.printDetails()



