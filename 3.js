let accountHolder = prompt("Enter Account Holder Name:");
let balance = prompt("Enter Current Balance:");
let withdrawal = prompt("Enter Withdrawal Amount:");

if (withdrawal <= balance) {
    let remainingBalance = balance - withdrawal;

    document.write("Account Holder: " + accountHolder);
    document.write("<br>");
    document.write("Current Balance: $" + balance);
    document.write("<br>");
    document.write("Withdrawal Amount: $" + withdrawal);
    document.write("<br>");
    document.write("Remaining Balance: $" + remainingBalance);
} else {
    document.write("Transaction Failed");
    document.write("<br>");
    document.write("Reason: Insufficient Balance");
}