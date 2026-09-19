let name = prompt("Enter Name:");
let age = prompt ("Enter Age:") || +10;

if (age >= 18) {
    document.write("Name: " + name);
    document.write("<br>");
    document.write("Age: " + age); 
    document.write("<br>");
    document.write("Status: Eligible for Driving License");
} else {
    document.write("Name: " + name);
    document.write("<br>");
    document.write("Age: " + age );
    document.write("<br>");
    document.write("Status: Not Eligible");
    document.write("<br>");
    document.write("Reason: Minimum age is 18");
}  