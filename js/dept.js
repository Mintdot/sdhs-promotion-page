window.onload = function () {
    setHeight()
}

function setHeight() {
    var obj = document.getElementsByClassName("dept_wrap");
    var objHeight;
    var realObj;

    for(var i = 0; i < obj.length; i++) {
        realObj = obj.item(i);
        objHeight = realObj.offsetHeight;
        realObj.style.marginTop = -objHeight/2 + "px";
    }
}