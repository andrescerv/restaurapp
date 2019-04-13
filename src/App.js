import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer  from './Components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
