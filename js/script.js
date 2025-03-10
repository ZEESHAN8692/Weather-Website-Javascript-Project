let searchInput = document.querySelector(".searchInput");
let searchBtn = document.querySelector(".searchBtn");

const apiKey = "011221a2bcf1ba2efb623f1dd53cb91e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
// &appid=

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${"kolkata"}&appid=${apiKey}`);
  const data = await response.json();

  document.querySelector(".teplature").innerHTML = "";
  document.querySelector(".cityName").innerHTML = "";
  document.querySelector(".Humidity").innerHTML = "";
  document.querySelector(".windSpeed").innerHTML = "";
}

searchBtn.addEventListener("click", () => {});
checkWeather();
