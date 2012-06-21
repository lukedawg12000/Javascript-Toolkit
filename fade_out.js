var fadeoutTimer;

//parameter str:      the string ID of the object to fade out
//parameter step:     the amount to subtract from the current opacity
//parameter interval: the amount of time in milliseconds between iterations

function startFadeOut(str,step,interval) {
    fadeoutTimer = setTimeout("dofade('" + str + "',"+String(step)+","+String(interval)+");", 10);
}

//lowers the opacity of the object
function dofade(str,step,interval) {
    var obj = document.getElementById(str);
    obj.style.opacity = obj.style.opacity - step;

    if (obj.style.opacity <= step) {
        obj.style.opacity = 0;
        //remove the object from the flow of the document's elements
        obj.style.display = "none";
    }
    else {
        fadeoutTimer = setTimeout("dofade('" + str + "',"+String(step)+","+String(interval)+");", interval);
    }
}
