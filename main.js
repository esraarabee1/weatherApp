const apiKey = "c7cf31f2cb2390bdc3199a49a0b98fd1";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const wetherIcon = document.querySelector(".wether-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.main.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      wetherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      wetherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      wetherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      wetherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      wetherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
