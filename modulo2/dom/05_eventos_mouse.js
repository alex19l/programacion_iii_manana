document.getElementById("caja")

caja.addEventListener("mouseenter", () => {
    caja.style.backgroundColor = "yellow";
});

caja.addEventListener("mouseleave", () => {
    caja.style.background = "lightgray";
});
caja.addEventListener("click", () => {
    alert('Click')
});

const areaTouch = document.getElementById("areaTouch");
areaTouch.addEventListener("touchstart", () => {
    areaTouch.style.backgroundColor = "orange";
});
areaTouch.addEventListener("touchend", () => {
    areaTouch.style.backgroundColor = "lightblue";
});
areaTouch.addEventListener("click", () => {
    alert('Click en areaTouch');
});

