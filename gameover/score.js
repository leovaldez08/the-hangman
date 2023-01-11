const akatsuki = new Audio("../assets/bgm4.mp3");

function playBgm() {
    akatsuki.play();
}
document.getElementById("body").addEventListener("mouseover", playBgm) 

const replay = document.getElementById("button")

replay.onclick = () => {
    location.href = "../gameplay/game.html"
}

let points = sessionStorage.getItem ("score")
document.getElementById("score-board").innerHTML = points;