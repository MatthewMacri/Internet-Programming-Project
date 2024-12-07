let map, marker;
let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];

function initMap() {
  const defaultLocation = { lat: 40.7128, lng: -74.0060 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: defaultLocation,
  });

  marker = new google.maps.Marker({
    position: defaultLocation,
    map: map,
  });
}

async function fetchWeather(city) {
  const apiKey = "deee09ccb00d46659a6c043600b88e96"; // OpenWeatherMap API key
  const geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`;

  try {
    const geoResponse = await fetch(geoApiUrl);
    const geoData = await geoResponse.json();
    if (geoData.length === 0) {
      alert("City not found. Please enter a valid city.");
      return;
    }

    const { lat, lon } = geoData[0];
    const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    const weatherResponse = await fetch(weatherApiUrl);
    const weatherData = await weatherResponse.json();

    displayWeather(weatherData.current_weather, geoData[0].name);
    updateMap(lat, lon);
    saveRecentSearch(city);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data. Please try again later.");
  }
}

function displayWeather(data, cityName) {
  document.getElementById("city-name").textContent = cityName;
  document.getElementById("temperature").textContent = `${data.temperature}°C`;
  document.getElementById("description").textContent = "Clear sky";
  document.getElementById("humidity").textContent = "N/A";
  document.getElementById("wind-speed").textContent = `Wind Speed: ${data.windspeed} km/h`;
}

function updateMap(lat, lon) {
  const location = { lat, lng: lon };
  map.setCenter(location);
  marker.setPosition(location);
}

function saveRecentSearch(city) {
  if (!recentSearches.includes(city)) {
    recentSearches.push(city);
    if (recentSearches.length > 5) {
      recentSearches.shift(); 
    }
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    updateRecentSearches();
  }
}

function updateRecentSearches() {
  const recentSearchesList = document.getElementById("recent-searches");
  recentSearchesList.innerHTML = ""; 
  recentSearches.forEach((city) => {
    const listItem = document.createElement("li");
    listItem.textContent = city;
    listItem.addEventListener("click", () => fetchWeather(city));
    recentSearchesList.appendChild(listItem);
  });
}

document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const city = document.getElementById("city-input").value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  updateRecentSearches();
  if (typeof initMap === "function") {
    initMap();
  }
});

function toggleSpinner(show) {
  document.getElementById("loading-spinner").style.display = show ? "block" : "none";
}
