function startExperience(){

const music=document.getElementById("music");

music.play();

confetti({
particleCount:250,
spread:120,
origin:{y:0.6}
});

}

function blowCandles(){

const flames=document.querySelectorAll(".flame");

flames.forEach(f=>{
f.style.display="none";
});

confetti({
particleCount:500,
spread:180,
origin:{y:0.6}
});

}

function notePlaceholder(){}


/* RANDOM BALLOONS */

window.onload=function(){

const colors=[
"#ff6b6b",
"#ffd93d",
"#6bcB77",
"#4d96ff",
"#c77dff",
"#ff8fab",
"#7bdff2",
"#ffa94d"
];

function createBalloon(){

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.style.background=colors[Math.floor(Math.random()*colors.length)];

balloon.style.left=Math.random()*100+"vw";

const fromTop=Math.random()>0.5;

if(fromTop){
balloon.style.top="-80px";
}else{
balloon.style.bottom="-80px";
}

const duration=8+Math.random()*7;

balloon.animate([
{transform:"translateY(0px) translateX(0px)"},
{transform:"translateY(-120vh) translateX("+(Math.random()*250-125)+"px)"}
],{
duration:duration*1000,
iterations:Infinity
});

document.getElementById("balloon-container").appendChild(balloon);

}

/* MORE BALLOONS */

for(let i=0;i<12;i++){
createBalloon();
}

};
