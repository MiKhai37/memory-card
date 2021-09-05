import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  render() {
    return(
      <div className='Card' onClick={ () => this.props.onClick(this.props.cardID) }>
          { this.props.cardID }
      </div>
    )
  }
}

export default Card;