let studentName = prompt("Enter Student Name:");
let totalMarks = prompt("Enter Total Marks:");
let obtainedMarks = prompt("Enter Obtained Marks:");

let percentage = (obtainedMarks / totalMarks) * 100;

let grade;

if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else if (percentage >= 50) {
    grade = "D";
} else {
    grade = "F";
}

document.write("Student: " + studentName);
document.write("<br>");
document.write("Percentage: " + percentage + "%");
document.write("<br>");
document.write("Grade: " + grade);
document.write("<br>");

if (percentage >= 50) {
    document.write("Result: Pass");
} else {
    document.write("Result: Fail");
}