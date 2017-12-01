function move(title, alt) {
    prevNone(title);
    nextDisplay(alt);

}

function prevNone(title) {
    var prevTitle;
    var prev;

    prevTitle = title + "_wrap";
    prev = document.getElementById(prevTitle);
    prev.style.display = "none";


}

function nextDisplay(alt) {
    var nextAlt;
    var next;

    nextAlt = alt + "_wrap";
    next = document.getElementById(nextAlt);
    next.style.display = "block";

    if(alt == "game", "vr", "space", "iot") {
        setHeight();
    }

}