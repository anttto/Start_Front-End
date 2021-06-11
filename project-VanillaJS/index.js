const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#FF0000";

function handleClick() {
    
    // const hasClass = title.classList.contains(CLICKED_CLASS);
    // if (!hasClass) {
    //     title.classList.add(CLICKED_CLASS);
    // } else {
    //     title.classList.remove(CLICKED_CLASS);
    // }

    title.classList.toggle(CLICKED_CLASS);


}

function init(){
    title.addEventListener("click", handleClick);
}

init();

function handleOffline(){
    console.log('good-bye');
}

function handleOnline(){
    console.log('welcome back!')
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);

