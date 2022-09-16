import React, { Component } from 'react';
import axios from 'axios';
import './WeatherAPI.css';

class WeatherAPI extends Component {

    constructor(props) {
        super(props)

        this.state = {
            weatherForecast: [],
            time: [],
            temp: [],
            hourly: []
        }
    }

    componentDidMount() {
        axios.get("https://api.open-meteo.com/v1/forecast?latitude=59.9138&longitude=10.7387&hourly=temperature_2m&timezone=Europe%2FBerlin")
        .then((response) => {
            this.setState({
                weatherForecast: response.data,
                time: response.data.hourly.time,
                temp: response.data.hourly.temperature_2m
            });
        })
    }

    render() {
        const {weatherForecast} = this.state
        const {time} = this.state
        const {temp} = this.state
        return (
            <div>
              <h1>Weather forecast today in Oslo</h1>
              <h2>Timezone: {weatherForecast.timezone}</h2>
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-low" viewBox="0 0 16 16">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm.5-9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707zM3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707z"></path>
                </svg>
                Weather Forecast</h3>
              <div>
              <div className='time-table'>{time.map(tim => <ul>{tim}</ul>)}</div>
              <div className='temp-table'>{temp.map(tem => <ul>{tem} Celcius</ul>)}</div>
              </div>
            </div>
        )
    }
}

export default WeatherAPI