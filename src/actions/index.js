import axios from 'axios';

// const API_KEY = '7a0a478f6135246b4554caf801988098';
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const API_KEY = 'uKHVOtuGmu5hJfGgovEIwhsFUz4gdGfc';
const ROOT_URL = `http://dataservice.accuweather.com`;
// https://developer.accuweather.com/

// http://dataservice.accuweather.com/locations/v1/cities/search?apikey=uKHVOtuGmu5hJfGgovEIwhsFUz4gdGfc&q=most&language=cs&details=true
// http://dataservice.accuweather.com/forecasts/v1/daily/5day/126760?apikey=uKHVOtuGmu5hJfGgovEIwhsFUz4gdGfc&language=cs&details=true&metric=true

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, countryCode) {
  // const url = `${ROOT_URL}&q=${city},${countryCode}&units=metric&cnt=3`;
  // const url = `${ROOT_URL}&q=${city},${countryCode}&units=metric`;

  const url = `${ROOT_URL}/forecasts/v1/daily/5day/126760?apikey=uKHVOtuGmu5hJfGgovEIwhsFUz4gdGfc&language=cs&details=true&metric=true`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
