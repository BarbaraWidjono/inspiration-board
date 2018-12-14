import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  const { id, text, emoji } = props.card;

  const removeCard = (id) => {
    console.log("Inside of Card.js, removeCard");
    props.removeCardCallback(id);
  }

  return (
    <div className="card">
      <p className="card__content">{text}</p>
      <p>{emoji}</p>
      <button
        type="button"
        className="card__delete"
        onClick={() => removeCard(id)}
      >
        x
      </button>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
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
