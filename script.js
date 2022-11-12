/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable quotes */
/* eslint-disable prefer-const */
const p = document.querySelector('p')

/* async function getCats () {
  const result = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&appid=9bd7e3b69c5654518fc199b82873ec05', { method: 'GET', mode: 'cors' })
  // eslint-disable-next-line no-unused-vars
    .then(result.json())
}

getCats()

const cityName = document.getElementById('search-input')
const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', getCityName)

function getCityName () {
  p.textContent = weatherBalloon()
}

function weatherBalloon () {
  let key = '9bd7e3b69c5654518fc199b82873ec05'
  fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=' + key)
    .then(function (resp) { return resp.json() }) // Convert data to json
    .then(function (data) {
      p.textContent = data
    })
    .catch(function () {
      // catch any errors
    })
} */
const submitBtn = document.getElementById('submitBtn')

async function weatherBalloon () {
  const baseURL = 'https://api.openweathermap.org/data/2.5/forecast?q='
  const cityName = document.getElementById('search-input')
  const nameInput = cityName.value
  const api = '&appid=9bd7e3b69c5654518fc199b82873ec05'
  const completeURL = baseURL + nameInput + api
  const result = await fetch(completeURL, { mode: 'cors' })
  const data = await result.json()
  alert(JSON.stringify(data))
}

submitBtn.addEventListener('click', weatherBalloon)
