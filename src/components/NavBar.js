import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div className='NavBar'>
        <header>Memory Card Game</header>
        <p>Score: {this.props.score}</p>
        <p>Best Score: {this.props.bestScore}</p>
      </div>
    )
  }
}

export default NavBar