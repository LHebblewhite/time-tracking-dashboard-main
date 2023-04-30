const infoContainer = document.getElementsByClassName("infoContainer");

menuElipsis.addEventListener("hover", event => {
    for (let i = 0; i < infoContainer.length; i++){
        infoContainer[i].style.filter = brightness("0%");
    }
})