function checkResult(score) {
    if (score >= 80 && score <= 100) {
        alert("Excellent!");
    } else if (score >= 70 && score <= 79) {
        alert("Very Good!");
    }  else if (score >= 60 && score <= 69) {
        alert("Good!");
    } else if (score >= 40 && score <= 59) {
      alert("Pass!");
    } else if (score >= 0 && score <= 39) {
      alert("Fail!");
    }
}
let score = prompt("Enter your score:");
checkResult(score);