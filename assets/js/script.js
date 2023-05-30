const API_KEY = '03314e65cfbfc21bd2e2fc95c9133396';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Select DOM elements
const searchForm = document.querySelector('#search-form');
const cityInput = document.querySelector('#city-input');
const searchHistory = document.querySelector('#search-history');
const currentWeather = document.querySelector('#current-weather');
const forecast = document.querySelector('#forecast');

// Initialize variables
let city = '';
let history = [];

// Load search history from localStorage
if (localStorage.getItem('history')) {
    history = JSON.parse(localStorage.getItem('history'));
    renderSearchHistory();
}

// Listen for form submit event
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    city = cityInput.value.trim();

    if (city) {
        // Save search history to localStorage
        history.push(city);
        localStorage.setItem('history', JSON.stringify(history));

        // Update UI
        renderCurrentWeather();
        renderForecast();
        renderSearchHistory();
    }
        // Reset form
        searchForm.reset();
    });