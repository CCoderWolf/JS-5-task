let customerName = prompt("Enter Customer Name:");
let nights = prompt("Enter Number of Nights:");
let pricePerNight = prompt("Enter Price Per Night:");

let totalAmount = nights * pricePerNight;

document.write(" HOTEL BOOKING ");
document.write("<br><br>");
document.write("Guest: " + customerName);
document.write("<br>");
document.write("Nights: " + nights);
document.write("<br>");
document.write("Price Per Night: $" + pricePerNight);
document.write("<br>");
document.write("Total Amount: $" + totalAmount);
document.write("<br>");
