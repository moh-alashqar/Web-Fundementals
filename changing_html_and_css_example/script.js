var favAnimal = document.querySelector("#fav-animal");
function pickCat(){
    console.log(favAnimal);
    console.log(favAnimal.src);
    favAnimal.src= "assets/cat.jpg";
}

function pickDog(){
    console.log(favAnimal);
    console.log(favAnimal.src);
    favAnimal.src = "assets/dog.jpg";
}