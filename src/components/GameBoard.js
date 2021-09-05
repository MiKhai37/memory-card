import React, { Component } from 'react';
import Card from './Card';
import NavBar from './NavBar';
import Footer from './Footer';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      orderID: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      score: 0,
      bestScore: 0,
      historyID: [],
    };
  };

  

  handleClick = (id) => {
    if (this.state.historyID.includes(id)) {
      if (this.state.score > this.state.bestScore) {
        this.setState({
          bestScore: this.state.score,
        });
      };
      this.setState({
        score: 0,
        historyID: [],
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        historyID: this.state.historyID.concat(id),
      });
    };

    this.setState({
      orderID: this.shuffleArray(this.state.orderID),
    });
  };

  renderCard = (i) => {
    return (
      <Card cardID={i} onClick={this.handleClick} />
    );
  };

  shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  render() {
    return(
      <div className='main'>
        <NavBar score={this.state.score} bestScore={this.state.bestScore}/>
        <div className='GameBoard'>
          {this.state.orderID.map((id) => {
            return (
              this.renderCard(id)
            );
          })}
          
        </div>
        <Footer />
      </div>
    );
  }
};

export default GameBoard;