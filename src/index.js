const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const button = document.querySelector("button");

const body = document.body

function onClickBtn() {
  const firstRandomColor = colors[Math.floor(Math.random() * colors.length)] 
  const secondRandomColor = colors[Math.floor(Math.random() * colors.length)];
        // color Array에서 랜덤 추출해서 변수에 넣기 두 번
  // const style = document.createElement("style");
  //       //html element "style"만들어 변수 style에 넣기
  // document.head.prepend(style);
  //       //변수style(html요소 style)을 document.head에 추가하기
  //       //html로 따지면 <style></style> 생성
  // style.innerText = `body{background:linear-gradient(${firstRandomColor}, ${secondRandomColor})}`;
  //       //<head><style>body{background:linear-gradient(${},${})}</style><head> 생성

  // 그러나 정답은
  body.style.background = `linear-gradient(${firstRandomColor},${secondRandomColor})`;
}

button.addEventListener("click", onClickBtn);
