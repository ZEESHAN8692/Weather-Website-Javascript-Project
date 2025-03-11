let searchInput = document.querySelector(".searchInput");
let searchBtn = document.querySelector(".searchBtn");

const apiKey = "011221a2bcf1ba2efb623f1dd53cb91e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
let hello =
  "https://api.openweathermap.org/data/2.5/weather?q=bareilly&appid=b4c441239amshf0e17cc540a2f32p176f59js";
// &appid=

async function checkWeather(city) {
  const response = await fetch(hello);
  // const response = await fetch(`${apiUrl}${"bareilly"}&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  //   document.querySelector(".teplature").innerHTML = "";
  //   document.querySelector(".cityName").innerHTML = "";
  //   document.querySelector(".Humidity").innerHTML = "";
  //   document.querySelector(".windSpeed").innerHTML = "";
}

searchBtn.addEventListener("click", () => {});
checkWeather();
