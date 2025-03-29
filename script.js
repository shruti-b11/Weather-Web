const api_key = "xyz";

const weather_icons = {
    Clear:  "icons/clear.png",
    Clouds: "icons/clouds.png",
    Rain: "icons/rainy-day.png",
    Snow: "icons/snow.png",
    Thunderstorm: "icons/thunderstorm.png",
    Mist: "icons/mist.png",
    Smoke: "icons/smoke.png",
    Haze: "icons/haze.png",
    Dust: "icons/dust.png",
    Fog: "fog.png",
    Sand: "icons/sand.png",
    Tornado: "icons/tornado.png",
    Default: "icons/default.png"
};

document.getElementById("getBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        fetchData(city);
    } else {
        alert("Please enter a city name!");
    }
});


function fetchData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (data.cod === 200) {
                display(data);
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
function display(data) {
    const weather_res = document.getElementById("weather_res");
    const { name, main, weather } = data;
    const condition = weather[0].main;

    const weather_icon = weather_icons[condition] || weather_icons.Default;
    
    weather_res.innerHTML = `
        <h2>${name}</h2>
        <img src="${weather_icon}" alt="${condition}" class="icon" />
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
}

