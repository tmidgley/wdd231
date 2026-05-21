const apiKey = "51f66612a1d9fa013c49a3be0c631025";
const lat = 33.6292;
const lon = -112.3679;

const currentTemp = document.querySelector("#current-temp");
const weatherDescription = document.querySelector("#weather-description");
const forecastContainer = document.querySelector("#forecast");

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

async function getWeather() {
    try {
        const currentResponse = await fetch(currentUrl);
        const currentData = await currentResponse.json();

        currentTemp.textContent = `${Math.round(currentData.main.temp)}°F`;
        weatherDescription.textContent = currentData.weather[0].description;

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        const dailyForecast = forecastData.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        ).slice(0, 3);

        forecastContainer.innerHTML = "";

        dailyForecast.forEach(day => {
            const date = new Date(day.dt_txt);
            const weekday = date.toLocaleDateString("en-US", { weekday: "long" });

            const p = document.createElement("p");
            p.innerHTML = `<strong>${weekday}:</strong> ${Math.round(day.main.temp)}°F`;
            forecastContainer.appendChild(p);
        });

    } catch (error) {
        currentTemp.textContent = "Weather unavailable";
        console.error("Weather error:", error);
    }
}

getWeather();