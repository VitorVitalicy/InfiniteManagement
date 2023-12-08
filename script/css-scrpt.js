function getTitle(text, image){
    document.getElementById(text).style.color = "transparent"
    document.getElementById(text).style.transition = "0.3s"
    document.getElementById(image).style.height = "100%"
    document.getElementById(image).style.transition = "0.6s"
}

function getTitleOrigin(text, image){
    document.getElementById(text).style.color = "white"
    document.getElementById(image).style.height = "80%"
}

console.log("Teste")