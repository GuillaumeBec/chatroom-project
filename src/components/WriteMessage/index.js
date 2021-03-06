import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const WriteMessage = ({ messageValue,
  changeMessageValue,
  addMessage,
}) => {
  const handleOnChange = (event) => {
    // console.log(messageValue);
    changeMessageValue(event.target.value);
  };

  const handleOnSubmit = (event) => {
    // console.log('je veux envoyer le message', messageValue);
    event.preventDefault();
    addMessage();
    document.querySelector('#messageForm').reset();
  };

  return (
    <div className="writeMessage">
      <form
        id="messageForm"
        action=""
        onSubmit={handleOnSubmit}
      >
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
  );
};

WriteMessage.propTypes = {
  messageValue: PropTypes.string.isRequired,
  changeMessageValue: PropTypes.func.isRequired,
  addMessage: PropTypes.func.isRequired,
};

export default WriteMessage;
