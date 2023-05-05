var likesCountElement = document.querySelector("#likes-count");
var likesCount = 0;
function addLike(){
    likesCount++;
    likesCountElement.innerText = likesCount + " Like(s)"
}