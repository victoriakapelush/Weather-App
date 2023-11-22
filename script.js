//fetch city/country name
const city = document.getElementById('city');
const generalWeather = document.getElementById('general-weather');
const weatherImg = document.getElementById('weather-img');
const weatherDescription = document.getElementById('weather-description');
const temp = document.getElementById('temperature');
const feelsLike = document.getElementById('feels-like');
const wind = document.getElementById('wind');
const humidity = document.getElementById('humidity');

const inputField = document.getElementById('input-value');
const inputValue = document.getElementById('input-value');
const baseUrl = 'http://api.weatherapi.com/v1/current.json?key=356ec73f30fc4119ad0234835232111&q=';
const urlEnd = '&aqi=no';


inputField.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        fetch(baseUrl + inputValue.value + urlEnd, {mode: 'cors'})
        .then(function(response) {
          return(response.json())
        })
        .then(function(response) {
            console.log(response)
            city.textContent = response.location.name +", "+response.location.country;
            weatherDescription.textContent = response.current.condition.text;
            weatherImg.src = "http:" + response.current.condition.icon;
            temp.textContent = response.current.temp_c + "°C";
            feelsLike.textContent = "FEELS LIKE: " + response.current.feelslike_c + "°C";
            wind.textContent = "WIND: " + response.current.wind_mph + "MPH";
            humidity.textContent = "HUMIDITY: " + response.current.humidity + "%";
        })
      }
})