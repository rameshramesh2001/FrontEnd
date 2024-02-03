//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



let API_KEY = "14a7dc6e66753efcc57971e58116a5c5";
// const weathericon = document.querySelector(".group_41_CTP");
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
// const wicon = document.querySelector(".group_41_CTP");

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

let weather = {
    apiKey: "14a7dc6e66753efcc57971e58116a5c5",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (weatherdata) {
      const { name } = weatherdata;
      const { icon, description } = weatherdata.weather[0];
      const { temp, humidity } = weatherdata.main;
      const { speed } = weatherdata.wind;
      const {sunrise} = weatherdata.sys;
      const {sunset}  = weatherdata.sys;
      // const {visibility} = weatherdata.visibility;
      document.querySelector(".city").innerText = name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
       + humidity + "%";
      document.querySelector(".wind").innerText =
        + speed + " km/h";
      document.querySelector(".visibility").innerText = weatherdata.visibility + " km/h";
      document.querySelector(".air_pressure").innerText = weatherdata.main.pressure + " hpa";
      document.querySelector(".sunrise").innerText = window.moment(sunrise * 1000).format('HH:mm a');
      document.querySelector(".sunset").innerText =  window.moment(sunset * 1000).format('HH:mm a');


      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search-box button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Denver");






























// getweatherdata = (city)=>{
//     const URL = 'https://api.openweathermap.org/data/2.5/weather'

//     const full_url = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
//     const weatherpromise = fetch(full_url);
//     console.log(city)
    

//     return weatherpromise.then((response) => {
//         return response.json()
//     })
// }

// function searchcity(){
//     const city = document.getElementById('locationInput').value;
    
   

//     getweatherdata(city)
//     .then((response) =>{
//       showeatherdata(response)
//     })
//     .catch((err) =>{
//        console.log(err)
//     })
// }
// showeatherdata = (weatherdata) =>{
//     const {sunrise}  = weatherdata.sys;
//     const {sunset}  = weatherdata.sys;
//     // const {id} = weatherdata.weather[0];
//     const {icon} = weatherdata.weather[0];
//     console.log(icon)
//     // const dataIcon = weatherdata.weather[0];

//         // if(id == 800){
//         //     wicon.src = "img/clear.png"
//         // }
//         // else if(id >= 600 && id <= 622){
//         //     wicon.src = "img/snow.png"
//         // }
//         // else if(id >= 801 && id <= 804){
//         //     wicon.src = "img/cloud.png"
//         // }
//         // else if((id >= 300 && id <= 321) || (id >= 500 && id <= 531)){
//         //     wicon.src = "img/rain.png"
//         // }
        
//         document.getElementById('city_name').innerText = weatherdata.name;
//         document.getElementById('temp').innerText = Math.round(weatherdata.main.temp) +'°C';
//         document.getElementById("wind").innerText = weatherdata.wind.speed+'mph';
//         document.getElementById("humidity").innerText = weatherdata.main.humidity+'%';
//         document.getElementById("pressure").innerText = weatherdata.main.pressure+'hpa';
//         document.getElementById("visibility").innerText = weatherdata.visibility+'km';
//         document.getElementById("sunrise").innerText = window.moment(sunrise * 1000).format('HH:mm a');
//         document.getElementById("sunset").innerText = window.moment(sunset * 1000).format('HH:mm a');
//         document.querySelector(".icon").src = "https://openweathermap.org/img/wn"+ icon +".png"

        // moment(sunrise * 1000).format('HH:mm a')



        // if(weatherdata.weather[0].main == "Clouds"){
        //     weathericon.src = "img/cloud.png"
        // }
        // else if(weatherdata.weather[0].main == "Clear"){
        //     weathericon.src = "img/clear.png"
        // }
        // else if(weatherdata.weather[0].main == "Rain"){
        //     weathericon.src = "img/rain.png"
        // }
        // else if(weatherdata.weather[0].main == "Snow"){
        //     weathericon.src = "img/snow.png"
        // }
         
        // timezone.innerHTML = data.timezone;
        // countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'
// }


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