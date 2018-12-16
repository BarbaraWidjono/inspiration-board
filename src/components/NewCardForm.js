import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

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
        <p className="new-card-form__header">Add a Note</p>
        <section className="new-card-form__form">
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
          <input type="submit" name="submit" value="Create New Note" className="new-card-form__form-button" />
        </section>

      </form>
    )
  }
}

NewCardForm.propTypes = {
  createNoteCallback: PropTypes.func.isRequired
};
export default NewCardForm;
