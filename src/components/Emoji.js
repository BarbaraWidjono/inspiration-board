import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Emoji.css';

class Emoji extends Component{
  constructor(props){
    super(props);
  }


  render(){
    const icon = emoji.getUnicode(this.props.chars);

    return(
      <div className="emoji__pic">
        {icon}
      </div>
    )
  }
}

export default Emoji;
