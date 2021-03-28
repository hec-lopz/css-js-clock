const transformDegrees = (time, factor) => (time / factor) * 360 + 90;
const $secondsHand = document.querySelector(".second-hand");
const $minsHand = document.querySelector(".min-hand");
const $hoursHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = transformDegrees(seconds, 60);
  $secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = transformDegrees(mins, 60);
  $minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = transformDegrees(hours, 12);
  $hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

  console.log(hours);
}

setInterval(setDate, 1000);
