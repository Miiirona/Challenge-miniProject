const numbersInput = document.querySelector(".first-line input")
const guessNumberInput = document.querySelector(".second-line input")
const playBtn = document.querySelector(".second-line button")
const thirdLine = document.querySelector("#third-line")
const result = document.querySelector("#result")


function onNumbersSubmit(event){
  event.preventDefault();
}

function onBtnClick(event){
  event.preventDefault();
  const generateNumber = parseInt(numbersInput.value);
  const guessNumber = parseInt(guessNumberInput.value);
  const machineNumber = Math.ceil(Math.random() * generateNumber);
  if(generateNumber < 0){
    alert("Please give the generate number positive.")
  }else if(guessNumber < 0){
    alert("Please give the Guess number positive.")
  }else if(guessNumber > generateNumber){
    alert("Guessed number is too big!")
  } else{
    thirdLine.innerText = `You chose: ${guessNumber}, the machine chose: ${machineNumber}.`;
   thirdLine.classList.remove("hidden")
    if(guessNumber === machineNumber){
      result.innerText = "You won!"
   } else{
     result.innerText = "You lost!"
    }
  }
}

numbersInput.addEventListener("submit",onNumbersSubmit)
playBtn.addEventListener("click", onBtnClick)

// -
// // .first-line input에서 submit한 값이 새로고침 되는 것을 .preventDefault()로 막기
// // .first-line input value을 .second-line input의 max로 지정
//   //=>if .second-line input value가 .first-line input value보다 크면 안됨 
//   -

//.second-line input에 값을 입력하고 button을 누르면 
  //입력한 값과 랜덤 출력 값을 `~~~${}~~~${}~~` 안에 넣기
  //.third-line에 .hidden 삭제하기

//guessNumber와  machineNumber의 값이 다르면 #result의 innerText로 "You lost!"
  //같으면 "You won!" 입력