var imgs = document.getElementById("pf_wrap").children;
var last = imgs.length-2;
var sno = 0;
var imgs2 = document.getElementById("pf2_wrap").children;
var last2 = imgs.length-2;
var sno2 = 0;

function left1(){
    imgs[sno].style.animationName = "slide-to-right";

    sno++;
    if(sno>last) sno=0;

    imgs[sno].style.animationName = "slide-to-middle";
}

function right1(){
    imgs[sno].style.animationName = "slide-to-left";

    sno++;
    if(sno>last) sno=0;

    imgs[sno].style.animationName = "slide-to-middle2";
}

function left2(){
    imgs2[sno2].style.animationName = "slide-to-right";

    sno2++;
    if(sno2>last2) sno2=0;

    imgs2[sno2].style.animationName = "slide-to-middle";
}

function right2(){
    imgs2[sno2].style.animationName = "slide-to-left";

    sno2++;
    if(sno2>last2) sno2=0;

    imgs2[sno2].style.animationName = "slide-to-middle2";
}