const clockTitle = document.querySelector(".js-clock");

function dTimeChristmas(){
  const dateChristmas = new Date("2022-12-25 00:00:00");
  const date = new Date();

  const gap = dateChristmas - date;


  const days = Math.floor(gap / (1000* 60 * 60 * 24));
  const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((gap % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((gap%(1000*60)) / 1000);
  clockTitle.innerText = `${days}day ${hours}hour ${minutes}minute ${seconds}second`
}

dTimeChristmas();
setInterval(dTimeChristmas, 1000)
