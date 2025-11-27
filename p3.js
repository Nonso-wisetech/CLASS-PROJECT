const balance = 5000;
function withdrawal(amount) {
    if (amount > balance){
        alert('insufficent funds')
    }
    else{
        alert('Take your cash')
    }
}
let amount = (prompt("Enter Amount"));
withdrawal(amount);