/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable quotes */
/* eslint-disable prefer-const */
const submitBtn = document.getElementById('submitBtn')
const hiddenContainer = document.getElementById('hidden-container')

async function weatherForecast () {
  const baseURL = 'https://api.openweathermap.org/data/2.5/forecast?q='
  const cityName = document.getElementById('search-input')
  const nameInput = cityName.value
  const api = '&appid=9bd7e3b69c5654518fc199b82873ec05'
  const completeURL = baseURL + nameInput + api
  const result = await fetch(completeURL, { mode: 'cors' })
  const data = await result.json()
  // get data from JSON
  const kelvinTemp = JSON.stringify(data.list[0].main.temp)
  // convert to Celsius
  const celsTemp = Math.round((parseInt(kelvinTemp) - 273.15))
  const kelvinFeelsLike = JSON.stringify(data.list[0].main.feels_like)
  // convert to Celsius
  const celsFeelsLike = Math.round((parseInt(kelvinFeelsLike) - 273.15))
  const weatherDescription = JSON.stringify(data.list[2].weather[0].main)
  // create container to display data
  reset()
  hiddenContainer.style.height = "40%"
  hiddenContainer.style.width = "30%"
  hiddenContainer.style.border = '2px white solid'
  hiddenContainer.style.borderRadius = "10px"
  hiddenContainer.style.marginLeft = "37.5%"
  hiddenContainer.style.marginTop = "1%"
  hiddenContainer.style.backgroundColor = "white"
  hiddenContainer.style.opacity = "0.5"
  hiddenContainer.style.color = "black"
  hiddenContainer.style.textAlign = "center"
  // display city name
  const h1 = document.createElement('h1')
  hiddenContainer.appendChild(h1)
  h1.textContent = nameInput.toUpperCase()
  // display current temperature
  const p = document.createElement('p')
  hiddenContainer.appendChild(p)
  p.textContent = "Current temperature: " + celsTemp + "°C"
  p.style.fontSize = "30px"
  // display "feels like" temperature
  const p1 = document.createElement('p')
  hiddenContainer.appendChild(p1)
  p1.style.fontSize = "40px"
  p1.textContent = "Feels like: " + celsFeelsLike + "°C"
  // display current sky condition
  const p2 = document.createElement('p')
  hiddenContainer.appendChild(p2)
  p2.style.fontSize = "40px"
  p2.textContent = "Up in the sky: " + weatherDescription
}

submitBtn.addEventListener('click', weatherForecast)

// clear previous result and display a new one
function reset () {
  hiddenContainer.textContent = ""
}
