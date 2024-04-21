let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

function updateClock() {
  const now = new Date();
  let hoursNow = String(now.getHours()).padStart(2, "0");
  let minutesNow = String(now.getMinutes()).padStart(2, "0");
  let secondsNow = String(now.getSeconds()).padStart(2, "0");

  hours.textContent = hoursNow;
  minutes.textContent = minutesNow;
  seconds.textContent = secondsNow;
}

updateClock();
setInterval(updateClock, 1000);
