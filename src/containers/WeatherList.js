import React, {Component} from 'react';
import { connect } from 'react-redux';

import moment from 'moment';

import mraky from '../svg/pocasi_mraky.svg';
import polojasno from '../svg/pocasi_polojasno.svg';
import slunce from '../svg/pocasi_slunce.svg';

import Icon from '../components/Icon';

import csLocale from 'moment/locale/cs';
moment.locale('cs', csLocale)

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

    let day_one_icon = this.cloudCover(day_one.Day.CloudCover)
    let day_two_icon = this.cloudCover(day_two.Day.CloudCover)
    let day_three_icon = this.cloudCover(day_three.Day.CloudCover)

    return (
      <React.Fragment key={`${day_one.EpochTime}`}>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <div className="date">{moment(day_one.Date).format('dddd, DoM.YYYY')}</div>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Srážky:</td>
                    <td><strong>{day_one.Day.RainProbability} %</strong></td>
                  </tr>
                  <tr>
                    <td>Vítr:</td>
                    <td><strong>{Math.ceil(day_one.Day.Wind.Speed.Value)} {day_one.Day.Wind.Speed.Unit}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <div className="temperature group">
                <Icon icon={day_one_icon} />
                <div className="temperature-value">{Math.ceil(day_one.Temperature.Maximum.Value)}</div>
                <div className="celsius">°C</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <div className="date">{moment(day_two.Date).format('dddd, DoM.YYYY')}</div>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Srážky:</td>
                    <td><strong>{day_two.Day.RainProbability} %</strong></td>
                  </tr>
                  <tr>
                    <td>Vítr:</td>
                    <td><strong>{Math.ceil(day_two.Day.Wind.Speed.Value)} {day_two.Day.Wind.Speed.Unit}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <div className="temperature group">
                <Icon icon={day_two_icon} />
                <div className="temperature-value">{Math.ceil(day_two.Temperature.Maximum.Value)}</div>
                <div className="celsius">°C</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <div className="date">{moment(day_three.Date).format('dddd, DoM.YYYY')}</div>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Srážky:</td>
                    <td><strong>{day_three.Day.RainProbability} %</strong></td>
                  </tr>
                  <tr>
                    <td>Vítr:</td>
                    <td><strong>{Math.ceil(day_three.Day.Wind.Speed.Value)} {day_three.Day.Wind.Speed.Unit}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <div className="temperature group">
                <Icon icon={day_three_icon} />
                <div className="temperature-value">{Math.ceil(day_three.Temperature.Maximum.Value)}</div>
                <div className="celsius">°C</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  render() {
    return(
      <React.Fragment>
        <div className="row">
          <div className="col"><h2 className="text-center"><strong>Ústecko - výhled počasí</strong></h2></div>
        </div>
        <div className="row mt-3">
          {this.props.weather.map(this.renderWeather)}
        </div>
      </React.Fragment>
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
