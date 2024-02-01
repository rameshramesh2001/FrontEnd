//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



let API_KEY = "14a7dc6e66753efcc57971e58116a5c5";
const weathericon = document.querySelector(".group_41_CTP");
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeEl.innerHTML = (hoursIn12HrFormat < 10? '0'+hoursIn12HrFormat : hoursIn12HrFormat) + ':' + (minutes < 10? '0'+minutes: minutes)+ ' ' + `<span id="am-pm">${ampm}</span>`

    dateEl.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);



getweatherdata = (city)=>{
    const URL = 'https://api.openweathermap.org/data/2.5/weather'

    const full_url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherpromise = fetch(full_url);
    console.log(city)
    

    return weatherpromise.then((response) => {
        return response.json()
    })
}

function searchcity(){
    const city = document.getElementById('locationInput').value;
    
   

    getweatherdata(city)
    .then((response) =>{
      showeatherdata(response)
    })
    .catch((err) =>{
       console.log(err)
    })
}
showeatherdata = (weatherdata) =>{
        document.getElementById('city_name').innerText = weatherdata.name;
        document.getElementById('temp').innerText = weatherdata.main.temp +'°C';
        document.getElementById("wind").innerText = weatherdata.wind.speed+'mph';
        document.getElementById("humidity").innerText = weatherdata.main.humidity+'%';
        document.getElementById("pressure").innerText = weatherdata.main.pressure+'hpa';
        document.getElementById("visibility").innerText = weatherdata.visibility+'km';
        document.getElementById("sunrise").innerText = weatherdata.sys.sunrise;
        document.getElementById("sunset").innerText = weatherdata.sys.sunset;



        if(weatherdata.weather[0].main == "Clouds"){
            weathericon.src = "img/cloud.png"
        }
        else if(weatherdata.weather[0].main == "Clear"){
            weathericon.src = "img/clear.png"
        }
        else if(weatherdata.weather[0].main == "Rain"){
            weathericon.src = "img/rain.png"
        }
        else if(weatherdata.weather[0].main == "Snow"){
            weathericon.src = "img/snow.png"
        }
         
        // timezone.innerHTML = data.timezone;
        // countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'
}


// function showeatherdata (weatherdata){
// let {sunrise, sunset} = weatherdata.current;
// currentWeatherItemsEl.innerHTML = 
// `<div class="weather-item">
// <div>Sunrise</div>
// <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
// </div>
// <div class="weather-item1">
// <div>Sunset</div>
// <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
// </div>`;
// }















// const apiKey = '14a7dc6e66753efcc57971e58116a5c5';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// const locationInput = document.getElementById('locationInput');
// const searchButton = document.getElementById('searchButton');
// const locationElement = document.getElementById('location');
// const temperatureElement = document.getElementById('temperature');
// const descriptionElement = document.getElementById('description');

// searchButton.addEventListener('click', () => {
//     const location = locationInput.value;
//     if (location) {
//         fetchWeather(location);
//     }
// });

// function fetchWeather(location) {
//     const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             locationElement.textContent = data.name;
//             temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
//             descriptionElement.textContent = data.weather[0].description;
//         })
//         .catch(error => {
//             console.error('Error fetching weather data:', error);
//         });
// }
//function component , class component