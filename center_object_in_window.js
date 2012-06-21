//centers a box on the screen according the to windows inner height and width

//parameter obj: the object to be centered on the screen
function centerBox(obj) {
    var width = obj.offsetWidth; 
    var height = obj.offsetHeight;
    
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    obj.style.top = String((screenHeight - height) / 2) + "px";
    obj.style.left = String((screenWidth - width) / 2) + "px";
}

//tested to work on IE9, Chrome, Safari, Opera, FF