function clock() {
  let dateTime = new Date();
  let hours = dateTime.getHours();
  let minutes = dateTime.getMinutes();
  let second = dateTime.getSeconds();
  let am_pm = document.getElementById("am-pm");

  if (hours >= 12) {
    am_pm.innerHTML = "PM";
  } else {
    am_pm.innerHTML = "AM";
  }

  if (hours > 12) {
    hours -= 12;
  }

  document.getElementById("hrs").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = second;
}
setInterval(clock, 1000);
