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

    const day_one = cityData.list[1]
    const day_two = cityData.list[9]
    const day_three = cityData.list[17]

    let day_one_icon = this.cloudCover(day_one.clouds.all)
    let day_two_icon = this.cloudCover(day_two.clouds.all)
    let day_three_icon = this.cloudCover(day_three.clouds.all)

    return (
      <React.Fragment key={`${day_one.dt}`}>
        {/* day1 */}
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <div className="date">{moment(day_one.dt_txt).format('dddd, DoM.YYYY')}</div>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Srážky:</td>
                    <td><strong>{day_one.rain && this.objectKeysBack(day_one.rain) ? this.objectKeysBack(day_one.rain) : '0'} mm</strong></td>
                  </tr>
                  <tr>
                    <td>Vítr:</td>
                    <td><strong>{Math.ceil(day_one.wind.speed)} m/s</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <div className="temperature group">
                <Icon icon={day_one_icon} />
                <div className="temperature-value">{Math.ceil(day_one.main.temp_max)}</div>
                <div className="celsius">°C</div>
              </div>
            </div>
          </div>
        </div>
        {/* day 2 */}
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <div className="date">{moment(day_two.dt_txt).format('dddd, DoM.YYYY')}</div>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Srážky:</td>
                    <td><strong>{day_two.rain && this.objectKeysBack(day_two.rain) ? this.objectKeysBack(day_two.rain) : '0'} mm</strong></td>
                  </tr>
                  <tr>
                    <td>Vítr:</td>
                    <td><strong>{Math.ceil(day_two.wind.speed)} m/s</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <div className="temperature group">
                <Icon icon={day_two_icon} />
                <div className="temperature-value">{Math.ceil(day_two.main.temp_max)}</div>
                <div className="celsius">°C</div>
              </div>
            </div>
          </div>
        </div>
        {/* day 3 */}
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <div className="date">{moment(day_three.dt_txt).format('dddd, DoM.YYYY')}</div>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Srážky:</td>
                    <td><strong>{day_three.rain && this.objectKeysBack(day_three.rain) ? this.objectKeysBack(day_three.rain) : '0'} mm</strong></td>
                  </tr>
                  <tr>
                    <td>Vítr:</td>
                    <td><strong>{Math.ceil(day_three.wind.speed)} m/s</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <div className="temperature group">
                <Icon icon={day_three_icon} />
                <div className="temperature-value">{Math.ceil(day_three.main.temp_max)}</div>
                <div className="celsius">°C</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  objectKeysBack = (object) => {

    let key = ''

    const result = Object.keys(object).map(key => {

      if (typeof object[key] !== 'undefined') {
        key = Math.round(object[key])
      }
    })

    return key
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
