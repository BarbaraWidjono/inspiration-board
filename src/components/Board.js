import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// npm install axios --save
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import emoji from 'emoji-dictionary';

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

  removeCard = (id) => {
    const deleteURL = "https://inspiration-board.herokuapp.com/cards/";
    const deleteAPI = `${deleteURL}${id}`;

    axios.delete(deleteAPI)
      .then((response) => {
        const updateList = this.state.allData.filter((card) =>{
          return card["card"].id !== id;
        })
        this.setState({allData: updateList});
      })
      .catch((error) => {
        console.log(error);
      })

  }

  createNote = (newNote) => {
    const newNoteURL = "https://inspiration-board.herokuapp.com/boards/barbara/cards";

    axios.post(newNoteURL, newNote)
      .then((response) => {
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
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    // const test = emoji.getUnicode("railway_car")

    const allCards = this.state.allData.map((card, i) => {

      const formattedCard = {
        id: card["card"].id,
        text: card["card"].text,
        emoji: card["card"].emoji,
      }

      return <Card
        key={i}
        card={formattedCard}
        removeCardCallback={this.removeCard}
        />
    });

    return (
      <div className="board">
        {allCards}
        <NewCardForm createNoteCallback={this.createNote}/>
      </div>
    )
  }

}

Board.propTypes = {

};

export default Board;
