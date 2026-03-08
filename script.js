function blowCandles(){

const flames=document.querySelectorAll(".flame");

flames.forEach(f=>{

const smoke=document.createElement("div");
smoke.className="smoke";

f.parentElement.appendChild(smoke);

f.style.opacity="0";

});

document.getElementById("wishText").classList.add("show");

setTimeout(()=>{

confetti({
particleCount:500,
spread:180,
origin:{y:0.6}
});

},1500);

}

/* balloons */

window.onload=function(){

const colors=[
"#ff6b6b","#ffd93d","#6bcB77","#4d96ff",
"#c77dff","#ff8fab","#7bdff2","#ffa94d"
];

function createBalloon(){

const balloon=document.createElement("div");
balloon.className="balloon";

balloon.style.background=
colors[Math.floor(Math.random()*colors.length)];

balloon.style.left=Math.random()*100+"vw";

if(Math.random()>0.5){
balloon.style.top="-80px";
}else{
balloon.style.bottom="-80px";
}

const duration=8+Math.random()*7;

balloon.animate(
[
{transform:"translateY(0)"},
{transform:"translateY(-120vh)"}
],
{
duration:duration*1000,
iterations:Infinity
}
);

document.getElementById("balloon-container").appendChild(balloon);

}

for(let i=0;i<14;i++){
createBalloon();
}

};
