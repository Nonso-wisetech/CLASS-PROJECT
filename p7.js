function trafficLight(color){
    if(color ==="green"){
        alert("Go!");
    }
    else if(color === "yellow"){
        alert("get ready");
    }
    else if (color === "red"){
        alert("stop");
    }
    else{
        alert("invalid color")
    }
}
let color = prompt("Enter your color:");
trafficLight(color);