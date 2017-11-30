
window.onload = function(){

var imgs = document.getElementById("pf1").children;
var last = imgs.length-1;
var sno = 0;
var imgs2 = document.getElementById("pf2").children;
var last2 = imgs2.length-1;
var sno2 = 0;

function left1(){
    imgs[sno].style.animationName = "slide-to-right";

    sno++;
    if(sno>last) sno=0;

    imgs[sno].style.animationName = "slide-to-middle";

}

function right1(){
    imgs[sno].style.animationName = "slide-to-left";

    sno--;
    if(0>sno) sno=last;

    imgs[sno].style.animationName = "slide-to-middle2";


}

function left2(){
    imgs2[sno2].style.animationName = "slide-to-right";

    sno2++;
    if(sno2>last2) sno2=0;

    imgs2[sno2].style.animationName = "slide-to-middle";

}
function right2(){
    console.log(1);
    imgs2[sno2].style.animationName = "slide-to-left";

    sno2--;
    if(0>sno2) sno2=last2;

    imgs2[sno2].style.animationName = "slide-to-middle2";

}
    var st = setInterval(left1,1000);
    var st2 = setInterval(left2,1000);
}