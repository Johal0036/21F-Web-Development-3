// Reference:
// https://webdesign.tutsplus.com/tutorials/how-to-build-a-responsive-navigation-bar-with-flexbox--cms-33535

const menu = document.getElementById("menu")
const nav = document.getElementById("navigation")

// Expand burger menu
const expand = document.getElementById("expand")
// Collapse burger menu
const collapse = document.getElementById("collapse")

function open() {
    menu.style.display = "block";
    nav.style.height = "180px";

    expand.style.display = "none";
    collapse.style.display = "block"
}
expand.addEventListener("click", open)

function close() {
    menu.style.display = "none"
    nav.style.height = "50px"
    expand.style.display = "block"
    collapse.style.display = "none"
}
collapse.addEventListener("click", close)

const viewport = window.screen.width
if (viewport === "800px") {
    expand.style.display = "none";
    collapse.style.display = "none"
} 