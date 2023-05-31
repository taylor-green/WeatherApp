# WeatherApp

## Description
This is a web based weather app that was created using JavaScript code and a weather API. It allows a user to search for a city and see the current weather and a 5 day forecast. It uses local storage to save the users recent searches. 

It sets constants for an API key and the base URL for the OpenWeatherMap API. It selects DOM elements using querySelector and sets variables for the city and search history. It loads the search history from localStorage if it exists, using JSON.parse to convert the stored string to an array of strings. It then renders the search history to the page using a function.

## Code and Tech
I utilized VS Code to build this project. Other technologies used were JavaScript, HTML, CSS, and the OpenWeatherMap API. All of these elements work together to create a functioning web application that allows the user to check the weather in the city that they search.

## Features
This application features a search bar when the user first visits the page. 

![initial-load-up](https://github.com/taylor-green/WeatherApp/assets/121259035/cb6b401b-91d3-49ca-8996-fd8592968e41)

The user can then type a city in the search bar and search the forecast for that city.

![first-search](https://github.com/taylor-green/WeatherApp/assets/121259035/8bfe7653-0ecd-4610-b375-f34a093fa257)

Finally, local storage saves the users recent searches to be revisited later.

![local-storage](https://github.com/taylor-green/WeatherApp/assets/121259035/527a5e60-f14d-4efe-810f-89bb022148dd)


## Usage

This web application can be found at ![https://taylor-green.github.io/WeatherApp/]


## License

MIT License

Copyright (c) [2023] [TaylorGreen]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

