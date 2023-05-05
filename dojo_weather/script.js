var tempValueElement = document.querySelectorAll(".main-container-item-values-item");

function citySelect(){
    alert("Loading weather report...");
}

function unitChange(element){
    if (element.value == "f"){
        for(var i=0; i<tempValueElement.length; i++){
            tempValueElement[i].innerText = Math.ceil(parseInt(tempValueElement[i].innerText) * 9 / 5 + 32) + "°"; 
            console.log(tempValueElement[i].innerText);
        }
    } else if (element.value == "c"){
        for(var i=0; i<tempValueElement.length; i++){
            tempValueElement[i].innerText = Math.ceil((parseInt(tempValueElement[i].innerText) - 32) * 5 / 9) + "°"; 
        }
    } else {
        console.error("InvalidUnitSelect");
    }
}

function cookieAccept(element){
    element.parentNode.remove();
}