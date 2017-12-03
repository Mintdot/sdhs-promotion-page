window.onload = function(){

var imgs;
var last;
var sno;
var imgs2;
var last2;
var sno2;

imgs = document.getElementById("pf1").children;
last = imgs.length-1;
sno = 0;
imgs2 = document.getElementById("pf2").children;
last2 = imgs2.length-1;
sno2 = 0;

function left1(){
    imgs[sno].style.animationName = "slide-to-right";

    sno++;
    if(sno>last) sno=0;

    imgs[sno].style.animationName = "slide-to-middle";
}

function left2(){
    imgs2[sno2].style.animationName = "slide-to-right";

    sno2++;
    if(sno2>last2) sno2=0;

    imgs2[sno2].style.animationName = "slide-to-middle";
}

setInterval(left1, 2000);
setInterval(left2, 2000);
}