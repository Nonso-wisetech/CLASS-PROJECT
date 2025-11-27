function checkGrade(score){
    if(score >=70 && score <= 100){
        alert('your score is A')
    }
    else if(score >= 60){
        alert('your score is B')
    }
    else if (score >= 50){
        alert('your score is C')
    }
    else if(score >= 45){
        alert('your score is D')

    }
    else{
        alert('your score is F')
    }
}
let score = prompt("Enter your Score");
checkGrade(score);