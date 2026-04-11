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
function openLetter(id){
document.getElementById(id).style.display="block";
}

function closeLetter(id){
document.getElementById(id).style.display="none";
}

const affirmations=[
"The way your mind works is genuinely rare.",
"You are effortlessly pretty.",
"I hate it when you underestimate yourself, please don’t do it and even if you do I am always there to remind you otherwise.",
"The way you care is something I’ll admire forever."
];

function showAffirmation(index){
document.getElementById("affirmationText").innerText=affirmations[index-1];
}
