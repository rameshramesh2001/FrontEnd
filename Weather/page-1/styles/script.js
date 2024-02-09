//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


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

let weather = {
    apiKey: "14a7dc6e66753efcc57971e58116a5c5",
    fetchWeather: function (place) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        place +
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
        .then((data) => this.mainWeather(data));
    },
    mainWeather: function (weatherdata) {
      document.querySelector(".city").innerText =  weatherdata.name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + weatherdata.weather[0].icon + ".png";
      document.querySelector(".description").innerText = weatherdata.weather[0].description;
      document.querySelector(".temp").innerText = weatherdata.main.temp + "°C";
      document.querySelector(".humidity").innerText =weatherdata.main.humidity + "%";
      document.querySelector(".wind").innerText =
        + weatherdata.wind.speed + " km/h";
      document.querySelector(".visibility").innerText = weatherdata.visibility + " km/h";
      document.querySelector(".air_pressure").innerText = weatherdata.main.pressure + " hpa";
      document.querySelector(".sunrise").innerText = weatherdata.sys.window.moment(sunrise * 1000).format('HH:mm a');
      document.querySelector(".sunset").innerText = weatherdata.sys.window.moment(sunset * 1000).format('HH:mm a');


      // document.querySelector(".weather").classList.remove("loading");
      // document.body.style.backgroundImage =
      //   "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".inputbox").value);
    },
  };
  
  document.querySelector(".searchbox button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".inputbox")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Sivakasi");






























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





  function searchbox(inp, arr) {
    var currentFocus;
    inp.addEventListener("input", function(e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "searchbox-list");
        a.setAttribute("class", "searchbox-items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
          if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            b.addEventListener("click", function(e) {
                inp.value = this.getElementsByTagName("input")[0].value;
                closeAllLists();
            });
            a.appendChild(b);
          }
        }
    });
  
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "searchbox-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
    });
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("searchbox-active");
    }
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("searchbox-active");
      }
    }
    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("searchbox-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
  }
  var countries = ["Afghanistan","Sivakasi","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe","Ariyalur","Chengalpattu","Chennai","Coimbatore","Cuddalore","Dharmapuri","Dindigul","Erode","Kallakurichi","Kancheepuram","Karur","Krishnagiri","Madurai","Mayiladuthurai","Nagapattinam","Kanniyakumari","Nagercoil","Namakkal","Perambalur","Pudukottai","Ramanathapuram","Ranipet","Salem","Sivagangai","Tenkasi","Thanjavur","Theni","Thiruvallur","Thiruvarur","Thoothukudi","Trichirappalli","Thirunelveli","Tirupathur","Tiruppur","Tiruvannamalai","Nilgiris","Udagamandalam","Vellore","Viluppuram","Virudhunagar"];
  searchbox(document.getElementById("locationInput"), countries);
  
























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