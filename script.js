/*const API_KEY = "70868a7f33c79ac028d42e40019e87e3";

document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeatherData(city);
    } else {
        alert("Please enter a city name!");
    }
});

function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                alert("City not found!");
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("Unable to fetch weather data.");
        });
}

function displayWeatherData(data) {
    const weatherResult = document.getElementById('weatherResult');
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <h2>${name}</h2>
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}
*/

const API_KEY = "70868a7f33c79ac028d42e40019e87e3"; // Replace with your OpenWeatherMap API key

// Mapping weather conditions to custom icons
const customIcons = {
    Clear:  "clear.png",
    Clouds: "assets/icons/cloudy.png",
    Rain: "assets/icons/rain.png",
    Snow: "assets/icons/snow.png",
    Thunderstorm: "assets/icons/thunderstorm.png",
    Drizzle: "assets/icons/rain.png",
    Mist: "mist.png",
    Smoke: "assets/icons/cloudy.png",
    Haze: "haze.png",
    Dust: "assets/icons/cloudy.png",
    Fog: "assets/icons/cloudy.png",
    Sand: "assets/icons/cloudy.png",
    Ash: "assets/icons/cloudy.png",
    Squall: "assets/icons/cloudy.png",
    Tornado: "assets/icons/thunderstorm.png",
    Default: "assets/icons/default.png"
};

// Event listener for the "Get Weather" button
document.getElementById("getWeatherBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        fetchWeatherData(city);
    } else {
        alert("Please enter a city name!");
    }
});

// Fetch weather data from OpenWeatherMap API
function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === 200) {
                displayWeatherData(data);
            } else {
                alert("City not found! Please try another.");
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            alert("Unable to fetch weather data.");
        });
}

// Display weather data and icon
function displayWeatherData(data) {
    const weatherResult = document.getElementById("weatherResult");
    const { name, main, weather } = data;
    const condition = weather[0].main;

    // Get the custom icon based on the weather condition
    const customIcon = customIcons[condition] || customIcons.Default;

    // Update the result HTML
    weatherResult.innerHTML = `
        <h2>${name}</h2>
        <img src="${customIcon}" alt="${condition}" />
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}
