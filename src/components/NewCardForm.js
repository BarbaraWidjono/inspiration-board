import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

class NewCardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: "",
      emoji: "",
    };
  }

  inputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newState = {}
    newState[field] = value;
    this.setState(newState);
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    const newNote = {
      text: this.state.text,
      emoji: this.state.emoji,
    }

    if(this.state.text.length > 0){
      this.setState({
        text: "",
        emoji: "",
      })
    }

    this.props.createNoteCallback(newNote);
  }

  render(){
    return(
      <form
        className="new-card-form"
        onSubmit={this.onFormSubmit}>
        <h3 className="new-card-form__header">Add a Note</h3>
        <div>
          <label htmlFor="text" className="new-card-form__form-label">Text:</label>
          <input
            name="text"
            value={this.state.text}
            onChange={this.inputChange}
          />
        </div>
        <div>
          <label htmlFor="emoji" className="new-card-form__form-label">Emoji:</label>
          <input
            name="emoji"
            value={this.state.emoji}
            onChange={this.inputChange}
          />
        </div>
        <input type="submit" name="submit" value="Create New Note" />
      </form>
    )
  }
}

export default NewCardForm;
