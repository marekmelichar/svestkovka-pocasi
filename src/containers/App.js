import React, {Component} from 'react';
import WeatherList from './WeatherList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

import style from '../css/main.css';

class App extends Component {

  componentDidMount() {
    // go and fetch a weather data
    this.props.fetchWeather();
  }

  render() {
    return (
      <div className="container">
        <WeatherList />
      </div>
    );
  }
}

// fetchWeather is from actions/index
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
