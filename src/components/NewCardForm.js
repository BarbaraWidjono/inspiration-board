import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

class NewCardForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      text: "",
      emoji: "",
      error: "",
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

    if(this.state.text.length > 0){
      const newNote = {
        text: this.state.text,
        emoji: this.state.emoji,
      }

      this.setState({
        text: "",
        emoji: "",
        error: "",
      })

      this.props.createNoteCallback(newNote);
    }
    else{
      this.setState({error: "Text field cannot be empty"})
    }
  }

  render(){
    return(
      <section>
        {this.state.error}
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
      </section>
    )
  }
}

NewCardForm.propTypes = {
  createNoteCallback: PropTypes.func.isRequired
};
export default NewCardForm;
