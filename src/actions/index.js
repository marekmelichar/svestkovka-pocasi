import axios from 'axios';

// const ROOT_URL = `https://dataservice.accuweather.com`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, countryCode) {
  // const url = `${ROOT_URL}/forecasts/v1/daily/5day/126760?apikey=uKHVOtuGmu5hJfGgovEIwhsFUz4gdGfc&language=cs&details=true&metric=true`;
  const url = `https://api.openweathermap.org/data/2.5/forecast?id=3070291&APPID=7a0a478f6135246b4554caf801988098&units=metric`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
