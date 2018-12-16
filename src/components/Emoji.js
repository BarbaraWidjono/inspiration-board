import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './Emoji.css';

const Emoji = (props) => {
  const icon = emoji.getUnicode(props.chars);

  return(
    <div className="emoji__pic">
      {icon}
    </div>
  )
}

Emoji.propTypes = {
  chars: PropTypes.string.isRequired
};

export default Emoji;
