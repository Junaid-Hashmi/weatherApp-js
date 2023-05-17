let data;

const submit = document.getElementById("submit-btn");
const inputBox = document.getElementById("city-input");
const countryName = document.getElementById("country-name");
const stateName = document.getElementById("state-name");
const cityName = document.getElementById("city-name");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const temperature = document.getElementById("temperature");
const icon = document.getElementById("icon");
const weatherStatus = document.getElementById("weather-status");

const getData = async (event) => {
  event.preventDefault();

  const cityInput = inputBox.value;

  // Fetching the details
  const fetchData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=acf12948f1fa472892c191001232404&q=${cityInput}`
  );
  const orgData = await fetchData.json();
  data = orgData;
  console.log(data);

  // Putting the details
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  cityName.innerHTML = data.location.name;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = `${data.current.wind_kph} kmph`;
  temperature.innerHTML = `${data.current.temp_c} &degC`;
  weatherStatus.innerHTML = data.current.condition.text;
  icon.src = `${data.current.condition.icon}`;
};
