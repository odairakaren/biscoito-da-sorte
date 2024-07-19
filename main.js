var closedCookie = document.querySelector("#closedCookie");
var buttonTryAgain = document.querySelector("#tryAgain");

function closedCookieClick(){
    document.querySelector("#closedCookieContainer").classList.add("hide");
    document.querySelector("#openedCookieContainer").classList.remove("hide");
}

function openedCookieClick(){
    document.querySelector("#closedCookieContainer").classList.remove("hide");
    document.querySelector("#openedCookieContainer").classList.add("hide");
}

closedCookie.addEventListener('click', closedCookieClick)
buttonTryAgain.addEventListener('click', openedCookieClick)