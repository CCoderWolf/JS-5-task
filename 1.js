let productName = prompt("Enter Product Name:");
let productPrice = prompt("Enter Product Price:");
let quantity = prompt("Enter Quantity:");

let total = productPrice * quantity;

document.write("SHOPPING BILL");
document.write("<br><br>");
document.write("Product: " + productName);
document.write("<br>");
document.write("Price: $" + productPrice);
document.write("<br>");
document.write("Quantity: " + quantity);
document.write("<br>");
document.write("Total: $" + total);
document.write("<br>");
 