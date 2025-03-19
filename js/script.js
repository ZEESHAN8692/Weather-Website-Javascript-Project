let searchInput = document.querySelector(".searchInput");
let searchBtn = document.querySelector(".searchBtn");

const apiKey = "d8e84a6b367d4b6da5e95420251103";
const apiUrl = "https://api.weatherapi.com/v1/current.json?key=";
// let cityName = "bareilly";

async function checkWeather(city = "kolkata") {
  const response = await fetch(`${apiUrl}${apiKey}&q=${city}`);
  // const response = await fetch(`${apiUrl}${"bareilly"}&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  document.querySelector(".teplature").innerHTML = `${Math.floor(
    data.current.temp_c
  )}°`;
  document.querySelector(".cityName").innerHTML = data.location.name;
  document.querySelector(".Humidity").innerHTML = `${data.current.humidity} %`;
  document.querySelector(
    ".windSpeed"
  ).innerHTML = `${data.current.wind_kph} km/h`;

  document.querySelector(".weatherText").innerHTML =
    data.current.condition.text;

  let WeatherImage = document.querySelector(".WeatherImage");

  if (data.current.condition.text === "Mist") {
    WeatherImage.src = "Static/mist.png";
  } else if (
    data.current.condition.text === "Clear" ||
    data.current.condition.text === "Sunny"
  ) {
    WeatherImage.src = "Static/clear.png";
  } else if (
    data.current.condition.text === "Clouds" ||
    data.current.condition.text === "Partly cloudy" ||
    data.current.condition.text === "Partly Cloudy"
  ) {
    WeatherImage.src = "Static/cloudy.png";
  } else if (data.current.condition.text === "Drizzle") {
    WeatherImage.src = "Static/drizzle.png";
  } else if (data.current.condition.text === "Rain") {
    WeatherImage.src = "Static/rainy.png";
  } else if (data.current.condition.text === "Snow") {
    WeatherImage.src = "Static/snow.pngs";
  } else if (data.current.condition.text === "Fog") {
    WeatherImage.src = "Static/fog.png";
  }
}
checkWeather();
searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});
