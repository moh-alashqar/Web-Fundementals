var clickCount = 0;
function getStarted(){
    clickCount++;
    alert("Get started has been clicked " + clickCount + " time(s)!");
}

function mouseOver(element){
    element.classList.remove("main-container-lft-btns-start");
    element.classList.add("main-container-lft-btns-start-onmouseover");
}

function mouseOut(element){
    element.classList.remove("main-container-lft-btns-start-onmouseover");
    element.classList.add("main-container-lft-btns-start");
}