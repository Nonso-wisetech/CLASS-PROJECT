
let usernmae = prompt('Enter your usernmae');
let password = prompt('Enter your password');

function login(){
    if(usernmae == "admin"  && password == "1234") {
        alert("login succsseffull")
    }
    else{
        alert("Wrong Username or password!")
    }
}
login();
