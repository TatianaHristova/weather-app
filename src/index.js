function showWeather(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector(".current-temperature-value");
  temperatureElement.innerHTML = temperature;
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value;

  let apiKey = "be370966b8473f0115f0d32afo601c3t";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}

function changeDate() {
  let now = new Date();
  let currentHours = now.getHours();
  let currentMin = now.getMinutes();
  let currentDay = now.getDay();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  if (currentMin < 10) {
    currentMin = `0${currentMin}`;
  }

  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }

  return `${days[currentDay]} ${currentHours}:${currentMin}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let date = document.querySelector(".current-date");
date.innerHTML = changeDate();
