function login(element){
    if(element.innerText == "Login"){
        element.innerText = "Log Out";
    } else {
        element.innerText = "Login";
    }
}

function add(element){
    element.remove();
}
