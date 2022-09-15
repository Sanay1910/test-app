import React, { Component } from 'react';
import axios from 'axios';

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
                time: response.data.hourly.time
            });
        })
    }

    render() {
        const {weatherForecast} = this.state
        const {time} = this.state
        
        console.log(time)
        return (
            <div>
              <h1>Weather forecast in Oslo</h1>
              <h2>Timezone: {weatherForecast.timezone}</h2>
              <h3>Weather Forecast</h3>
              {time.map(tim => <li>{tim}</li>)}
            </div>
        )
    }
}

export default WeatherAPI