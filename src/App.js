import Footer from './components/Footer';
import NavBar from './components/NavBar';
import React, { Component } from 'react';
import './styles/App.css';
import GameBoard from './components/GameBoard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  };
  render() {
    return (
      <div className="App">
        <GameBoard score={this.state.score} bestScore={this.state.bestScore}/>
      </div>
    );
  };
  
};

export default App;
