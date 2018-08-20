import React, {Component} from 'react';
import { connect } from 'react-redux';

import _ from 'lodash';
import moment from 'moment';

import mraky from '../svg/pocasi_mraky.svg';
import polojasno from '../svg/pocasi_polojasno.svg';
import slunce from '../svg/pocasi_slunce.svg';

moment.locale('cs')

class WeatherList extends Component {

  constructor(props) {
    super(props)

    this.renderWeather = this.renderWeather.bind(this)
    this.cloudCover = this.cloudCover.bind(this)
  }

  cloudCover(clouds) {
    if (clouds < 33) {
      return slunce;
    }

    if (clouds > 33 && clouds < 66) {
      return polojasno;
    }

    if (clouds > 66 && clouds <= 100) {
      return mraky;
    }
  }

  renderWeather(cityData) {

    const day_one = cityData.DailyForecasts[0]
    const day_two = cityData.DailyForecasts[1]
    const day_three = cityData.DailyForecasts[2]

    // console.log('day_one', day_one);
    // console.log('day_two', day_two);
    // console.log('day_three', day_three);

    let day_one_icon = this.cloudCover(day_one.Day.CloudCover)
    let day_two_icon = this.cloudCover(day_two.Day.CloudCover)
    let day_three_icon = this.cloudCover(day_three.Day.CloudCover)

    return (
      <React.Fragment key={`${day_one.EpochTime}`}>
        <div className="col-md-4">
          <div className="date">{moment(day_one.Date).format('dddd, DoM.YYYY')}</div>
          <div className="rain">Srážky: {day_one.Day.Rain.Value} {day_one.Day.Rain.Unit}</div>
          <div className="wind">Vítr: {day_one.Day.Wind.Speed.Value} {day_one.Day.Wind.Speed.Unit}</div>
          <div className="temperature"><img src={day_one_icon} className="day-one-icon" alt="day one icon" /> {day_one.Temperature.Maximum.Value} {day_one.Temperature.Maximum.Unit}</div>
        </div>
        <div className="col-md-4">
          <div className="date">{moment(day_two.Date).format('dddd, DoM.YYYY')}</div>
          <div className="rain">Srážky: {day_two.Day.Rain.Value} {day_two.Day.Rain.Unit}</div>
          <div className="wind">Vítr: {day_two.Day.Wind.Speed.Value} {day_two.Day.Wind.Speed.Unit}</div>
          <div className="temperature"><img src={day_two_icon} className="day-two-icon" alt="day two icon" /> {day_two.Temperature.Maximum.Value} {day_one.Temperature.Maximum.Unit}</div>
        </div>
        <div className="col-md-4">
          <div className="date">{moment(day_three.Date).format('dddd, DoM.YYYY')}</div>
          <div className="rain">Srážky: {day_three.Day.Rain.Value} {day_three.Day.Rain.Unit}</div>
          <div className="wind">Vítr: {day_three.Day.Wind.Speed.Value} {day_three.Day.Wind.Speed.Unit}</div>
          <div className="temperature"><img src={day_three_icon} className="day-three-icon" alt="day three icon" /> {day_three.Temperature.Maximum.Value} {day_one.Temperature.Maximum.Unit}</div>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return(
      <div className="row">
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  }
}

// reading data from the state, sending them inside as a props
const mapStateToProps = state => {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
