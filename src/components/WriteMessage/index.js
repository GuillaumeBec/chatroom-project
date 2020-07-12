import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const WriteMessage = () => (
  <div>
    <form action="">
      <input type="text" name="usermessage" id="usermessage" placeholder="Ecrivez un message..." />
      <button type="submit"> Envoyer</button>
    </form>
  </div>
);

export default WriteMessage;
