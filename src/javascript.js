function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesTiming = moment().tz("America/Los_Angeles");
  losAngelesDate.innerHTML = moment().format("MMMM Do YYYY");
  losAngelesTime.innerHTML = losAngelesTiming.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");
  let parisTiming = moment().tz("Europe/Paris");
  parisDate.innerHTML = moment().format("MMMM Do YYYY");
  parisTime.innerHTML = parisTiming.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
