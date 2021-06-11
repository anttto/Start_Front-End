const body = document.querySelector("body");
const bgDiv = document.querySelector("#bgImage");
const IMG_NUMBER = 6;

function paintImage(imgNumber){
    // const image = new Image();
    // image.src = `images/${imgNumber + 1}.jpg`

    bgDiv.className = '';
    bgDiv.classList.add(`img0${imgNumber+1}`);
    // body.appendChild(image);

}

function genRandom(){
    var number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}


function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}



init(); 