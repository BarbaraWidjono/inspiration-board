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
    const getAllCards = "https://inspiration-board.herokuapp.com/boards/barbara/cards";

    axios.get(getAllCards)
      .then((response) => {
        this.setState({
          allData: response.data,
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  renderUpdated = () => {
    console.log("Inside Board.js, renderUpdated");
    let allCards = this.state.allData;
    allCards.forEach(function(element){
      console.log(element["card"]);
    })


  }

  removeCard = (id) => {
    const deleteURL = "https://inspiration-board.herokuapp.com/cards/";
    const deleteAPI = `${deleteURL}${id}`;

    // delete card from api
    axios.delete(deleteAPI)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

    // render an updated board
    this.renderUpdated();
  }

  render() {

    console.log("Inside Board.js, beneath render", this.state.allData);

    const allCards = this.state.allData.map((card, i) => {

      const formattedCard = {
        id: card["card"].id,
        text: card["card"].text,
        emoji: card["card"].emoji,
      }

      return <Card
        key={i}
        card={formattedCard}
        removeCardCallback={this.removeCard} />
    });

    return (
      <div className="board">
        {allCards}
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
