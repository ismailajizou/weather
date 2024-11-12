# Weather Application
This is a simple weather application that uses the [Weather API ](https://www.weatherapi.com/) to get the weather data for your current location.

### Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)

## Features
- Get the current weather data for your location
- Get the weather forecast for the next 7 days
- Get the weather forecast for the remaining hours of the day
- Get the weather details (wind speed, humidity, AQI, precipitation)
- Customizable units (Imperial, Metric)

## Technologies
- Vue.js 3
- Vanilla CSS
- [Weather API ](https://www.weatherapi.com/)
- [AQI API](https://aqicn.org/api/fr/)
- Pinia (Vue 3 Store)
- Axios
- Typescript 5
- Vue icons
- Date-fns

## Setup
1. Clone the repository
```bash
git clone https://github.com/ismailajizou/weather.git
```
2. Install the dependencies
```bash
yarn
```
3. Create a `.env` file at the root of the project and add the variables in the `.env.example` file

4. Run the application in development mode
```bash
yarn dev
```
5. Build the application for production
```bash
yarn build
```
6. Run the application in production mode
```bash
yarn start
```

