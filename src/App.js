import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer  from './Components/Footer/Footer'
import GetList from './Components/GetList/GetList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <GetList/>
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
