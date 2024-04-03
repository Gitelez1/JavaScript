

function hide(element) {
    var removeCookie = document.querySelector(removeCookie);
    element.remove();
}


function change(element) {
    if (element.innerText == '°C'){
        element.innerText = '°F'
    }
    else{
        element.innerText = '°C'
    }
}