import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  const { id, text, emoji } = props.card;


  return (
    <div className="card">
      <p className="card__content">{text}</p>
      <p>{emoji}</p>
    </div>
  )
}

Card.propTypes = {

};

export default Card;

// class Card extends Component {
//
//   constructor(props){
//     super(props)
//
//     this.state = {
//       allCards: this.props.allCards,
//     }
//   }
//
//
//
//   render() {
//
//     console.log(this.state.allCards);
//
//     return (
//       <div className="card">
//         Card
//       </div>
//     )
//   }
// }
//
// Card.propTypes = {
//
// };
//
// export default Card;
