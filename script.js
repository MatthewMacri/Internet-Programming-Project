let map, marker;

// Declare initMap in the global scope
function initMap() {
    const defaultLocation = { lat: 40.7128, lng: -74.0060 }; // Default: New York
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: defaultLocation,
    });
  
    marker = new google.maps.Marker({
      position: defaultLocation,
      map: map,
    });
  }
  
  // Ensure this function is defined before the Google Maps API script is loaded.
  

// Fetch Weather Data
async function fetchWeather(city) {
  const apiKey = "deee09ccb00d46659a6c043600b88e96"; // OpenWeatherMap API key
  const geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${apiKey}`;

  try {
    // Get latitude and longitude from city name
    const geoResponse = await fetch(geoApiUrl);
    const geoData = await geoResponse.json();
    if (geoData.length === 0) {
      alert("City not found. Please enter a valid city.");
      return;
    }

    const { lat, lon } = geoData[0];
    const weatherApiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    // Fetch weather data
    const weatherResponse = await fetch(weatherApiUrl);
    const weatherData = await weatherResponse.json();

    // Display weather
    displayWeather(weatherData.current_weather, geoData[0].name);
    updateMap(lat, lon);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Failed to fetch weather data. Please try again later.");
  }
}

// Display Weather Data
function displayWeather(data, cityName) {
  document.getElementById("city-name").textContent = cityName;
  document.getElementById("temperature").textContent = `${data.temperature}°C`;
  document.getElementById("description").textContent = "Clear sky"; // Simplified description
  document.getElementById("humidity").textContent = "N/A"; // Open-Meteo doesn't provide humidity
  document.getElementById("wind-speed").textContent = `Wind Speed: ${data.windspeed} km/h`;
}

// Update Map Location
function updateMap(lat, lon) {
  const location = { lat, lng: lon };
  map.setCenter(location);
  marker.setPosition(location);
}

// Form Submission Handler
document.getElementById("search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const city = document.getElementById("city-input").value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});