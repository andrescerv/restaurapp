import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.css';
import reducer from './store/reducer'
import Restaurants from './container/Restaurants'
import Navbar from './components/Navbar/Navbar'
import Footer  from './components/Footer/Footer'

const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar/>
          <header className="App-header">
            <Restaurants/>
          </header>
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;
