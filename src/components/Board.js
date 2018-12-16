import React, { Component } from 'react';
import axios from 'axios';
// npm install axios --save
import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      allData: [],
      errors: "",
      hide: "false",
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
        this.setState({errors: "Ooops couldn't find the board", hide: "true"});
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
        this.setState({errors: "Ooops couldn't delete that card. Please try again"});
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
            this.setState({errors: "Ooops, wasn't able to connect to your board. Please try again!!"});
          })
      })
      .catch((error) => {
        this.setState({errors: "Ooops, wasn't able to make a new card. Please try again!"});
      })
  }

  render() {

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
        {this.state.errors}
        {allCards}
        <section className={this.state.hide}>
          <NewCardForm createNoteCallback={this.createNote}/>
        </section>

      </div>
    )
  }

}

export default Board;
