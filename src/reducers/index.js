// Center of all reducers
import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';

// everything inside is a piece of state
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
