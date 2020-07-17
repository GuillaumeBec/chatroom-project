import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const WriteMessage = ({ messageValue, changeMessageValue }) => {
  const handleOnChange = (event) => {
    console.log(messageValue);
    changeMessageValue(event.target.value);
  };

  return (
    <div className="writeMessage">
      <form action="">
        <input
          className="writeMessage__input"
          type="text"
          name="usermessage"
          id="usermessage"
          placeholder="Ecrivez un message..."
          value={messageValue}
          onChange={handleOnChange}
        />
        <button className="writeMessage__button" type="submit"> Envoyer</button>
      </form>
    </div>
  )
};

WriteMessage.propTypes = {
  messageValue: PropTypes.string.isRequired,
  changeMessageValue: PropTypes.func.isRequired,
};

export default WriteMessage;
