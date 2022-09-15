import React, {useState} from 'react';
import WeatherAPI from './API/WeatherAPI';
import './App.css';
import FrontPage from './pages/frontPage/FrontPage';

class App extends React.Component {


  render() {
    return (
      <div>
        <FrontPage/>
        <WeatherAPI/>
      </div>
    )
    
  }
}
export default App;