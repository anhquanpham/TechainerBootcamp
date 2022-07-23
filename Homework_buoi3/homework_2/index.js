class Person{
    constructor(ID, Name, Age, Gender, DOB, Class){
        this.ID = ID;
        this.Name = Name;
        this.Age = Age;
        this.Gender = Gender;
        this.DOB = DOB;
        this.Class = Class;
    }
}

class Student extends Person{
    constructor(ID, Name, Age, Gender, DOB, Class, Math, Phys, Chem, Eng){
        super(ID, Name, Age, Gender, DOB, Class);
        this.Math = Math;
        this.Phys = Phys;
        this.Chem = Chem;
        this.Eng = Eng;
    }
    
    avrScore(){
    this.avr = (this.Math + this.Phys + this.Chem + this.Eng)/4;
    return this.avr;
    }

    pass(){
        if (this.Math > 4 && this.Phys > 4 && this.Chem > 4 && this.Eng > 4){
            return true;
        }else{
            return false;
        }
    }

    LetterGrade(){
        if (this.avr < 4) {
            return "F";
            } 
            else if (this.avr < 5) {
                return "D";
            }  
            else if (this.avr < 5.5) {
                return "D+";
            } 
            else if (this.avr < 7) {
                return "C";
            }  
            else if (this.avr < 8.5) {
                return "B";
            }  
            else {    
                return "A";
            }
    }
}

class StuClass{
    constructor(stuclass){
        this.stuclass = stuclass;
    }

    maxScore(StudentList){
        const students = StudentList.filter((student) => student.Class === this.stuclass);
        let max = students[0].avrScore();
        for (var i = 0; i < students.length; i++) {
          if (max < students[i].avrScore()) {
          max = students[i].avrScore();
          }
        }
        const ScoreMax = students.filter((student) => student.avrScore() === max);
      
        return ScoreMax;        
    }

    minScore(StudentList){
        const students = StudentList.filter((student) => student.Class === this.stuclass);
        let min = students[0].avrScore();
        for (var i = 0; i < students.length; i++) {
          if (min > students[i].avrScore()) {
          min = students[i].avrScore();
          }
        }
        const ScoreMin = students.filter((student) => student.avrScore() === min);
      
        return ScoreMin;
    }
}

const data = require("./Student.json");
const StudentList = data.map((student) => new Student(student.ID, student.Name, student.Age, student.Gender, student.DOB, student.Class, student.Math, student.Phys, student.Chem, student.Eng));
const ClassesList = [...new Set(data.map((student) => student.Class))];
console.log("Danh sách sinh viên");
console.log(StudentList);

console.log("");
console.log("Điểm trung bình của từng sinh viên: ");
for (let i =0; i < StudentList.length; i++){
    console.log(StudentList[i].Name +" : " + StudentList[i].avrScore());
}
console.log("");

console.log("Sinh viên có điểm trung bình cao nhất mỗi lớp: ")
for (let i =0; i < ClassesList.length; i++){
    let classroom = new StuClass(ClassesList[i]);
    console.log(classroom.stuclass + ":")
    console.log(classroom.maxScore(StudentList));
}
console.log("")
console.log("Sinh viên có điểm trung bình thấp nhất mỗi lớp: ")
for (let i =0; i < ClassesList.length; i++){
    let classroom = new StuClass(ClassesList[i]);
    console.log(classroom.stuclass + ":")
    console.log(classroom.minScore(StudentList));
}

console.log("")
console.log("Sinh viên qua môn với điểm các môn ≥ 4.0 (thang điểm 10): ")
const passed = StudentList.map((Student) => Student.pass())
for (let j =0; j< passed.length; j++){
    if (passed[j]){
        console.log(data[j].Name)
    }
}

console.log("");
console.log("Điểm trung bình theo thang điểm 4 và xếp loại của từng sinh viên: ");
for (let i =0; i < StudentList.length; i++){
    console.log(StudentList[i].Name +" : " + (StudentList[i].avrScore()*(4/10)).toFixed(2) +" (điểm " +StudentList[i].LetterGrade() +")");
}
console.log("");