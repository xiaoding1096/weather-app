const search = document.querySelector(".search");
const city = document.querySelector(".city");
const time = document.querySelector(".time");
const temp = document.querySelector(".temp");
const celsius = document.querySelector(".celsius");
const conditions = document.querySelector(".short-desc");
const weather = document.getElementById("weather");
const visibility = document.querySelector(".visibility span");
const wind = document.querySelector(".wind-speed");
const humidity = document.querySelector(".humidity");
const body = document.querySelector("body");
const content = document.querySelector(".content");

async function changeWeatherUI() {
  let capitalSearch = search.value.trim();
  let apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capitalSearch}?key=579XEPE66XU8KA92CEUPVGEE9 `;

  let data = await fetch(apiURL)
    .then((response) => response.json())
    .catch((error) => {});

  console.log(data);

  content.classList.remove(".hide");
  city.innerText = data.resolvedAddress;
  let temp123 = Math.round((data.currentConditions.temp - 32) / 1.8);
  temp.innerText = formattedTemp;
  conditions.innerText = data.currentConditions.conditions;
  visibility.innerText = data.currentConditions.visibility + " Km";
  wind.innerText = data.currentConditions.windspeed + " m/s";
  humidity.innerText = data.currentConditions.humidity + " %";
  time.innerText = new Date().toLocaleString("ja-JP");

  body.setAttribute("class", "warm");
  if (temp <= 15) {
    body.setAttribute("class", "cold");
  }
}

search.addEventListener("keypress", function (e) {
  if (e.code === "Enter") {
    changeWeatherUI();
  }
});
