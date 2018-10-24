import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './store'
import logo from './logo.svg';
import './App.css';
import AppWithIntl from './AppWithIntl'
import LocaleSwitch from './LocaleSwitch'



if (global) {
  global.System = { import: function () { } }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' }
  }

  render() {
   
    return (
      <Provider store={store}>
        <div className="App">         
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <div>
            <LocaleSwitch />
          </div>
          <AppWithIntl />

        </div>

      </Provider>
    );
  }
}


export default App

