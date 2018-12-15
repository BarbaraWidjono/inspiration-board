import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import Emoji from './Emoji';

const Card = (props) => {
  const { id, text, emoji } = props.card;

  const removeCard = (id) => {
    props.removeCardCallback(id);
  }

  return (
    <div className="card">
      <p className="card__content">{text}</p>
      <Emoji chars={emoji}/>

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
