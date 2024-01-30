//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



let API_KEY = "14a7dc6e66753efcc57971e58116a5c5";

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
    const city = document.getElementById('city-input').value;
   

    getweatherdata(city)
    .then((response) =>{
      console.log(response)
    })
    .catch((err) =>{
       console.log(err)
    })
}
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