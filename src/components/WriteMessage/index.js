import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const WriteMessage = () => (
  <div className="writeMessage">
    <form action="">
      <input className="writeMessage__input" type="text" name="usermessage" id="usermessage" placeholder="Ecrivez un message..." />
      <button className="writeMessage__button" type="submit"> Envoyer</button>
    </form>
  </div>
);

export default WriteMessage;
