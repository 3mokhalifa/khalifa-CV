var content1 = document.getElementById("content1")
var content2 = document.getElementById("content2")
var content3 = document.getElementById("content3")

var cr1 = document.getElementById("cr1")
var cr2 = document.getElementById("cr2")
var cr3 = document.getElementById("cr3")




var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")

openHome()


function openHome() {
    content1.style.display = "flex"
    content2.style.display = "none"
    content3.style.display = "none"

    cr1.classList.add("flipInX")
    btn1.onclick = null
    btn3.onclick = function () { openCerts() }
    btn2.onclick = function () { openSkills() }

    cr2.classList.remove("flipInX")
    cr3.classList.remove("flipInX")

    btn1.style.color = "tomato"
    btn2.style.color = "black"
    btn3.style.color = "black"




    btn1.style.backgroundColor = "white"
    btn1.style.border = "3px tomato solid"
    btn1.style.borderBottom = "white"
    btn1.style.marginBottom = "-3px"


    btn2.style.border = "none"
    btn2.style.backgroundColor = "transparent"

    btn3.style.border = "none"
    btn3.style.backgroundColor = "transparent"

}
function openSkills() {
    content1.style.display = "none"
    content2.style.display = "flex"
    content3.style.display = "none"

    cr2.classList.add("flipInX")
    btn2.onclick = null
    btn3.onclick = function () { openCerts() }
    btn1.onclick = function () { openHome() }

    cr1.classList.remove("flipInX")
    cr3.classList.remove("flipInX")

    btn1.style.color = "black"
    btn2.style.color = "tomato"
    btn3.style.color = "black"


    btn2.style.backgroundColor = "white"
    btn2.style.border = "3px tomato solid"
    btn2.style.borderBottom = "white"
    btn2.style.marginBottom = "-3px"

    btn1.style.border = "none"
    btn1.style.backgroundColor = "transparent"

    btn3.style.border = "none"
    btn3.style.backgroundColor = "transparent"
}
function openCerts() {
    content1.style.display = "none"
    content2.style.display = "none"
    content3.style.display = "flex"

    btn1.style.color = "black"
    btn2.style.color = "black"
    btn3.style.color = "tomato"

    cr3.classList.add("flipInX")
    btn3.onclick = null
    btn2.onclick = function () { openSkills() }
    btn1.onclick = function () { openHome() }

    cr1.classList.remove("flipInX")
    cr2.classList.remove("flipInX")

    btn3.style.backgroundColor = "white"
    btn3.style.border = "3px tomato solid"
    btn3.style.borderBottom = "white"
    btn3.style.marginBottom = "-3px"

    btn2.style.border = "none"
    btn2.style.backgroundColor = "transparent"

    btn1.style.border = "none"
    btn1.style.backgroundColor = "transparent"

}
