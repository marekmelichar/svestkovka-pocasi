import axios from 'axios';

const ROOT_URL = `https://dataservice.accuweather.com`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, countryCode) {
  const url = `${ROOT_URL}/forecasts/v1/daily/5day/126760?apikey=uKHVOtuGmu5hJfGgovEIwhsFUz4gdGfc&language=cs&details=true&metric=true`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
