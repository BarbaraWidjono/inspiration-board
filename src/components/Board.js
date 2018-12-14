import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// npm install axios --save
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      allData: [],
    };
  }

  componentDidMount(){
    console.log("Inside Component did mount");
    const getAllCards = "https://inspiration-board.herokuapp.com/boards/barbara/cards";

    axios.get(getAllCards)
      .then((response) => {
        console.log("Inside Board.js axios get");
        console.log(response);
        console.log(response.data);
        this.setState({
          allData: response.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  removeCard = () => {
    console.log("Inside Board.js, removeCard");
  }

  render() {

    // const parseCardData = this.state.allData["cards"]
    // console.log(parseCardData);

    console.log("Inside Board.js, beneath render", this.state.allData);

    const allCards = this.state.allData.map((card, i) => {

      const formattedCard = {
        id: card["card"].id,
        text: card["card"].text,
        emoji: card["card"].emoji,
      }

      console.log(formattedCard);
      return <Card
        key={i}
        card={formattedCard}
        removeCardCallback={this.removeCard} />
    });

    return (
      <div className="board">
        Board
        {allCards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
