const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("#weather-desc");
const highTemp = document.querySelector("#high-temp");
const lowTemp = document.querySelector("#low-temp");
const humidity = document.querySelector("#humidity");
const sunrise = document.querySelector("#sunrise");
const sunset = document.querySelector("#sunset");
const forecast = document.querySelector("#forecast");

const apiKey = "ce9834a2b81bf2acb860345f5d93d5a8";
const lat = 33.6292;
const lon = -112.3679;

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);

        if (!response.ok) {
            throw new Error("Weather data not available");
        }

        const data = await response.json();

        currentTemp.textContent = `${Math.round(data.main.temp)}°F`;
        highTemp.textContent = `${Math.round(data.main.temp_max)}°`;
        lowTemp.textContent = `${Math.round(data.main.temp_min)}°`;
        humidity.textContent = `${data.main.humidity}%`;

        weatherDesc.textContent = capitalize(data.weather[0].description);

        const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherIcon.setAttribute("src", iconSrc);
        weatherIcon.setAttribute("alt", data.weather[0].description);

        sunrise.textContent = formatTime(data.sys.sunrise);
        sunset.textContent = formatTime(data.sys.sunset);
    } catch (error) {
        console.error(error);
        weatherDesc.textContent = "Weather unavailable";
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);

        if (!response.ok) {
            throw new Error("Forecast data not available");
        }

        const data = await response.json();

        forecast.innerHTML = "";

        const dailyForecasts = data.list
            .filter(item => item.dt_txt.includes("12:00:00"))
            .slice(0, 3);

        dailyForecasts.forEach(day => {
            const date = new Date(day.dt_txt);
            const weekday = date.toLocaleDateString("en-US", {
                weekday: "long"
            });

            const temp = Math.round(day.main.temp);

            const p = document.createElement("p");
            p.innerHTML = `${weekday}: <strong>${temp}°F</strong>`;
            forecast.appendChild(p);
        });
    } catch (error) {
        console.error(error);
        forecast.textContent = "Forecast unavailable";
    }
}

function formatTime(unixTime) {
    return new Date(unixTime * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });
}

function capitalize(text) {
    return text
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

getCurrentWeather();
getForecast();