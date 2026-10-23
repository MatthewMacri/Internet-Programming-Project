# Weather Website

An interactive web application for searching and viewing weather conditions and forecasts for any location worldwide.

## Overview

The Weather Website is a client-side application that provides real-time weather information and forecasts. Users can search for any location and receive current weather conditions, detailed forecasts, and an embedded map view. The application leverages modern web APIs and JavaScript for a seamless user experience.

## Features

- Location-based weather search with input validation
- Real-time weather data retrieval from public APIs
- Display of current conditions (temperature, humidity, wind speed)
- Visual weather icons and condition descriptions
- Embedded map view showing searched location
- Date picker for selecting forecast dates
- Local storage integration for search history
- Responsive design for mobile and desktop
- Dynamic DOM manipulation for interactive results
- Cross-browser compatibility

## Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla and jQuery)
- jQuery UI (Date Picker)
- OpenWeatherMap API or similar weather API
- Google Maps API or OpenStreetMap
- Local Storage API
- Ajax/Fetch API

## Project Structure

```
.
├── Deliverable-1/          # Initial project setup and requirements
├── Deliverable-2/          # Development phase with feature implementation
├── Project Report/         # Documentation and analysis
├── index.html              # Main search page
├── results.html            # Results and forecast display page
├── style.css               # Application styling
├── script.js               # Core JavaScript functionality
├── README.md
└── LICENSE
```

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for weather API access
- API key from OpenWeatherMap (or compatible weather service)

### Installation

1. Clone the repository
2. No build or installation required for development
3. Add your weather API key to the configuration

### Running Locally

For development with live reload, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js http-server
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Usage

### Searching for Weather

1. Enter a city name or location in the search box
2. Press Enter or click the Search button
3. View current weather conditions and forecast
4. Check the embedded map for location reference

### Features in Detail

#### Current Weather Display
- Temperature in Celsius and Fahrenheit
- Weather condition with corresponding icon
- Humidity percentage
- Wind speed and direction
- Feels-like temperature
- Visibility and pressure data

#### Forecast
- Multi-day forecast with daily highs/lows
- Hourly forecast option
- Date picker to select specific forecast dates

#### Location Map
- Interactive map centered on searched location
- Zoom and pan controls
- Additional location markers

#### Search History
- Automatic save of last searched location
- Quick access to recent searches
- Persistent storage using browser's Local Storage

## Implementation Details

### API Integration

The application communicates with weather APIs using:
- Ajax XMLHttpRequest or Fetch API
- JSON data parsing and manipulation
- Error handling for network and API errors

### DOM Manipulation

Dynamic content creation using:
- Document.createElement() and appendChild()
- innerHTML and textContent properties
- Event listeners for user interactions
- Class manipulation for styling

### Data Persistence

- Local Storage for saving search history
- Automatic load of previous search on page return

### Input Validation

- Location name validation before API request
- Error messages for invalid input
- API response error handling and user feedback

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## API Keys Required

To run this application, you need:
- OpenWeatherMap API key (free tier available)
- Google Maps API key (or use OpenStreetMap which requires no key)

Sign up at:
- [OpenWeatherMap](https://openweathermap.org/api)
- [Google Maps API](https://cloud.google.com/maps-platform)

## Performance Considerations

- Minimal HTTP requests with efficient caching
- Lazy loading of map components
- Local storage for frequently accessed data
- Optimized image sizes for weather icons

## Testing

Test the application across:
- Different browsers and versions
- Mobile and tablet devices
- Various network speeds
- Multiple locations and weather conditions

## File Descriptions

| File | Purpose |
|------|---------|
| index.html | Landing page with search interface |
| results.html | Weather results display page |
| script.js | Core weather fetching and DOM logic |
| style.css | Responsive styling for all pages |

## Known Limitations

- Free API tiers may have rate limiting
- Accuracy depends on underlying weather service
- Historical data typically not available in free tier
- Some features require API key signup

## Future Enhancements

- Weather alerts and notifications
- Multiple location favorites
- Custom temperature units (C/F/K)
- Dark mode theme
- PWA support for offline access
- Unit tests with testing framework

## License

MIT License - See LICENSE file for details

## References

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [jQuery UI Documentation](https://jqueryui.com/)
- [OpenWeatherMap API Documentation](https://openweathermap.org/api)
- [Local Storage Web API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
