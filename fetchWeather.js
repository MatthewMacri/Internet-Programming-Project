let map, marker;

function initMap() {
  // Initialize the map centered on a default location
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: 40.7128, lng: -74.0060 }, // Default center (e.g., New York City)
  });

  // Create an AdvancedMarkerElement for placing the marker
  marker = new google.maps.marker.AdvancedMarkerElement({
    map: map,
    position: { lat: 40.7128, lng: -74.0060 }, // Default marker position
  });
}

document.getElementById('city-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const city = document.getElementById('city-input').value;
  fetchWeather(city);
});

async function fetchWeather(city) {
  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";  // Replace with your actual OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === 200) {
      displayWeather(data);
      updateMap(data.coord.lat, data.coord.lon);
    } else {
      alert("City not found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayWeather(data) {
  const temperature = data.main.temp;
  const city = data.name;
  const description = data.weather[0].description;
  const windSpeed = data.wind.speed;
  const feelsLike = data.main.feels_like;

  document.getElementById("temperature").textContent = `${temperature}°C`;
  document.getElementById("location").textContent = city;
  document.getElementById("conditions").innerHTML = `
    <p>Description: ${description}</p>
    <p>Wind Speed: ${windSpeed} km/hr</p>
    <p>Real Feel: ${feelsLike}°C</p>
  `;
}

function updateMap(lat, lon) {
  // Set the map's center to the new location
  const location = { lat, lng: lon };
  map.setCenter(location);

  // Update the AdvancedMarkerElement position
  marker.position = location;
}


document.getElementById('city-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const city = document.getElementById('city-input').value;
  fetchWeather(city);
});

async function fetchWeather(city) {
  const apiKey = "17ada1ec5cb68dd36cf8b0e44589a2b8";  // Replace with your actual OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.cod === 200) {
      displayWeather(data);
      updateMap(data.coord.lat, data.coord.lon);
    } else {
      alert("City not found");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayWeather(data) {
  const temperature = data.main.temp;
  const city = data.name;
  const description = data.weather[0].description;
  const windSpeed = data.wind.speed;
  const feelsLike = data.main.feels_like;

  document.getElementById("temperature").textContent = `${temperature}°C`;
  document.getElementById("location").textContent = city;
  document.getElementById("conditions").innerHTML = `
    <p>Description: ${description}</p>
    <p>Wind Speed: ${windSpeed} km/hr</p>
    <p>Real Feel: ${feelsLike}°C</p>
  `;
}

function updateMap(lat, lon) {
  // Set the map's center to the new location
  const location = { lat, lng: lon };
  map.setCenter(location);

  // Move the marker to the new location
  marker.setPosition(location);
}