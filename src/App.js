import React, { Component } from 'react';
import './App.css';

import QuizePage from './pages/QuizePage';


class App extends Component {

  render() {
    return (
      <div className="App">
        <QuizePage/>
      </div>
    );
  }
}

export default App;