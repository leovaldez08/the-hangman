const jojos = new Audio("./assets/bgm1.mp3");

function playBgm() {
    jojos.play();
}
document.getElementById("body").addEventListener("mouseover", playBgm) 
 
const instructions = document.getElementById("info-button");

instructions.onclick = () =>{
    window.open("./instructions/instructions.html", "_blank")
}

document.getElementById("play-button").onclick = () => {

var username = document.getElementById("input-box").value
    if (username == ""){
        window.open("index.html", "_self")
        alert("Please enter your name 😅")
    }
    else{
        sessionStorage.setItem("userName", username)
        window.open("./topics/topics.html", "_self")
    }
}
