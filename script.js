function startExperience(){

const music = document.getElementById("music");

music.play();

confetti({
particleCount:200,
spread:100,
origin:{y:0.6}
});

}

function showNote(){

document.getElementById("notePopup").style.display="flex";

}

function closeNote(){

document.getElementById("notePopup").style.display="none";

}
