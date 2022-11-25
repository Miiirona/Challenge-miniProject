const body = document.querySelector("body");
const h1 = document.querySelector("h1");

function handleWindowResize() {
    const fontColor = "font-color"
  if (window.innerWidth >= 1600) {
    body.style.backgroundColor = "blue";
    h1.classList.remove(fontColor)
  } else if (window.innerWidth >= 1400) {
    body.style.backgroundColor = "hotpink";
    h1.classList.remove(fontColor)
  } else if (window.innerWidth >= 1000) {
    body.style.backgroundColor = "purple";
    h1.classList.remove(fontColor)
  } else {
    body.style.backgroundColor = "yellow";
    h1.classList.add(fontColor)
  }
}

window.addEventListener("resize", handleWindowResize);
