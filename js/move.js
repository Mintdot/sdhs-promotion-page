function move(name, alt) {
    prevNone(name);
    nextDisplay(alt);

}

function prevNone(name) {
    var prevName;
    var prev;

    prevName = name + "_wrap";
    prev = document.getElementById(prevName);
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