function startExperience(){

const music = document.getElementById("music");

music.play();

confetti({
particleCount:300,
spread:120
});

}

function blowCandles(){

document.getElementById("wishText").classList.add("show");

confetti({
particleCount:500,
spread:180
});

}
