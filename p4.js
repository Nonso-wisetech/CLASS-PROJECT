function checknumber(num){
    if(num % 2==0){
        alert('this an even number');
    }
    else{
        alert('this number is odd');
    }
}

let num = prompt("Enter number");
checknumber(num);