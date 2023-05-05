// var likesCountElement1 = document.querySelector("#likes-count1");
// var likesCountElement2 = document.querySelector("#likes-count2");
// var likesCountElement3 = document.querySelector("#likes-count3");
// var likesCount1 = 9;
// var likesCount2 = 12;
// var likesCount3 = 9;

function addLike(id){
    var num = document.getElementById(id)
    var counter = parseInt(num.innerText)
    console.log(counter)
    counter++;
    num.innerText = counter + " Like(s)"

}

// function addLike2(){
//     likesCount2++;
//     likesCountElement2.innerText = likesCount2 + " Like(s)"
// }

// function addLike3(){
//     likesCount3++;
//     likesCountElement3.innerText = likesCount3 + " Like(s)"
// }