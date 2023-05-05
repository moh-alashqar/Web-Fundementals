var fullName = document.querySelector("#full-name");
var reqItem1 = document.querySelector(".req-item1");
var reqItem2 = document.querySelector(".req-item2");
var reqCountElement = document.querySelector("#req-count");
var connCountElement = document.querySelector("#conn-count");
var reqCount = 2;
var connCount = 500;

// will edit the profile
function editProfile(){
    fullName.innerText = "Mohammed Alashqar";
}

function accept(element){
    var elem  = document.querySelector("#"+element);
    // if(element.parentNode == reqItem1){
    //     reqItem1.remove();
    // } else if (element.parentNode == reqItem2) {
    //     reqItem2.remove();
    // }
    elem.remove()
    reqCount--;
    connCount++;
    reqCountElement.innerText = reqCount;
    connCountElement.innerText = connCount;
}

// function accept1(){
//     reqItem2.remove();
//     reqCount--;
//     connCount++;
//     reqCountElement.innerText = reqCount;
//     connCountElement.innerText = connCount;
// }

function reject(){
    reqItem1.remove();
    reqCount--;
    reqCountElement.innerText = reqCount;
}

function reject(){
    reqItem2.remove();
    reqCount--;
    reqCountElement.innerText = reqCount;
}

function displayAlert(){
    alert('Signed Out!')
}