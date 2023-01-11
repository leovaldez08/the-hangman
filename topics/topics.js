const bgmPlay = new Audio("../assets/bgm2.mp3");

function playBgm() {
    bgmPlay.play();
}
document.getElementById("body").addEventListener("mouseover", playBgm) 

const home = document.getElementById("home-button");

home.onclick = () => {
    location.href = "../index.html"
}

const instructions = document.getElementById("info-button");

instructions.onclick = () => {
    window.open("../instructions/instructions.html", "_blank")
}

const langs = document.getElementById("topic1");

langs.onclick = () => {
    location.href = "../gameplay/game.html"
}

const hello = document.getElementById("fill")
let user = sessionStorage.getItem ("userName")

hello.innerText = user


