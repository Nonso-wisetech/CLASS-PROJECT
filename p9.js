function calculatorFare(age) {
    if (age > 0 && age < 12) {
        alert("100");
    } else if (age >= 12 && age <= 17) {
        alert("200");
    } else if (age >= 18) {
        alert("300");
    } else {
        undefined
    }
}
let age = prompt("Enter your age:");
calculatorFare(age);
