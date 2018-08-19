import React, {Component} from 'react';
import { connect } from 'react-redux';

// import Chart from '../components/Chart';
// import GoogleMap from '../components/GoogleMap';

import _ from 'lodash';
import moment from 'moment';

moment.locale('cs')

class WeatherList extends Component {

  constructor(props) {
    super(props)

    this.renderWeather = this.renderWeather.bind(this)
    this.cloudCover = this.cloudCover.bind(this)
  }

  cloudCover(clouds) {
    console.log('clouds', clouds);
  }

  renderWeather(cityData) {

    const day_one = cityData.DailyForecasts[0]
    const day_two = cityData.DailyForecasts[1]
    const day_three = cityData.DailyForecasts[2]

    console.log('day_one', day_one);
    console.log('day_two', day_two);
    console.log('day_three', day_three);

    this.cloudCover(day_one.Day.CloudCover)
    this.cloudCover(day_two.Day.CloudCover)
    this.cloudCover(day_three.Day.CloudCover)

    return (
      <React.Fragment key={`${day_one.EpochTime}`}>
        <div className="col-md-4">
          <div className="date">{moment(day_one.Date).format('dddd, DoM.YYYY')}</div>
          <div className="rain">Srážky: {day_one.Day.Rain.Value} {day_one.Day.Rain.Unit}</div>
          <div className="wind">Vítr: {day_one.Day.Wind.Speed.Value} {day_one.Day.Wind.Speed.Unit}</div>
          <div className="temperature">icon {day_one.Temperature.Maximum.Value} {day_one.Temperature.Maximum.Unit}</div>
          cloudcover {day_one.Day.CloudCover}
          {/* {() => this.cloudCover(day_one.Day.CloudCover)} */}
        </div>
        <div className="col-md-4">
          <div className="date">{moment(day_two.Date).format('dddd, DoM.YYYY')}</div>
          <div className="rain">Srážky: {day_two.Day.Rain.Value} {day_two.Day.Rain.Unit}</div>
          <div className="wind">Vítr: {day_two.Day.Wind.Speed.Value} {day_two.Day.Wind.Speed.Unit}</div>
          <div className="temperature">icon {day_two.Temperature.Maximum.Value} {day_one.Temperature.Maximum.Unit}</div>
          cloudcover {day_two.Day.CloudCover}
          {/* {() => this.cloudCover(day_two.Day.CloudCover)} */}
        </div>
        <div className="col-md-4">
          <div className="date">{moment(day_three.Date).format('dddd, DoM.YYYY')}</div>
          <div className="rain">Srážky: {day_three.Day.Rain.Value} {day_three.Day.Rain.Unit}</div>
          <div className="wind">Vítr: {day_three.Day.Wind.Speed.Value} {day_three.Day.Wind.Speed.Unit}</div>
          <div className="temperature">icon {day_three.Temperature.Maximum.Value} {day_one.Temperature.Maximum.Unit}</div>
          cloudcover {day_three.Day.CloudCover}
          {/* {() => this.cloudCover(day_three.Day.CloudCover)} */}
        </div>
      </React.Fragment>
    )

    // const name = cityData.city.name;
    // const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp);
    // const pressures = cityData.list.map(weather => weather.main.pressure);
    // const humidities = cityData.list.map(weather => weather.main.humidity);
    // let dates = cityData.list.map(weather => weather.dt_txt)
    // // const dates = _.uniqBy(cityData.list.map(weather => weather.dt_txt), 'dt_txt')
    // const { lon, lat } = cityData.city.coord;
    //
    // moment.locale('cs')
    //
    // dates = dates.filter(i => i.slice(0, 10))
    // function removeDuplicateUsingFilter(arr){
    // let unique_array = arr.filter(function(elem, index, self) {
    //   console.log(index, self.indexOf(elem));
    //     return index == self.indexOf(elem)
    // });
    //     return unique_array
    // }
    //
    // console.log(removeDuplicateUsingFilter(dates));
    //
    // console.log(dates);
    //
    // return dates.map((temp,i) => {
    //   return(
    //     <div key={`${name}${i}`} className="col">
    //       Date: {moment(dates[i]).format('LLLL')}<br/>
    //     </div>
    //   )
    // })
    //
    // return(
    //   temps.map((temp,i) => {
    //     return(
    //       <div key={`${name}${i}`} className="col-md-4">
    //         Date: {moment(dates[i]).format('LLLL')}<br/>
    //       </div>
    //     )
    //
    //     // return (
    //     //   // <tr key={`${name}${i}`}>
    //     //   //   <td>{name}</td>
    //     //   //   <td>{temps[i]}</td>
    //     //   //   <td>{pressures[i]}</td>
    //     //   //   <td>{humidities[i]}</td>
    //     //   // </tr>
    //     //
    //     //   // <div key={`${name}${i}`} className="col-md-4">
    //     //   //   {/* Name: {name} */}
    //     //   //   {/* Temp: {temps[i]} */}
    //     //   //   {/* Pressure: {pressures[i]} */}
    //     //   //   {/* Humidity: {humidities[i]} */}
    //     //   //   {/* Date: {dates[i]} {moment().format('MMMM Do YYYY, h:mm:ss a')} {moment().format('LLLL')} {moment.unix(dates[i]).format('YYYY-MM-DD HH:mm:ss')} */}
    //     //   //   {/* Date: {moment().format('LLLL')} {moment.unix(dates[i]).format('MMMM Do YYYY, h:mm:ss a')} <br/> */}
    //     //   //   {/* Date: {dates[i]}<br/> */}
    //     //   //   Date: {moment(dates[i]).format('LLLL')}<br/>
    //     //   // </div>
    //     // )
    //   })
    // );
  }

  render() {
    console.log('this.props.weather', this.props.weather);
    return(
      // this.props.weather.map(this.renderWeather)
      <div className="row">
        {this.props.weather.map(this.renderWeather)}
      </div>

      // <table className="table table-hover">
      //   <thead>
      //     <tr>
      //       <th>City</th>
      //       <th>Temperature (°C)</th>
      //       <th>Pressure (hPa)</th>
      //       <th>Humidity (%)</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {this.props.weather.map(this.renderWeather)}
      //   </tbody>
      // </table>
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
