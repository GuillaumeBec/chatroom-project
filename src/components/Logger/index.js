import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Logger = () => (
  <div className="logger">
    <form action="">
      <input type="email" name="usermail" id="usermail" className="logger__mail" placeholder="Votre mail" />
      <input type="password" name="userpass" id="userpass" className="logger__password" placeholder="Votre mot de passe" />
      <button type="submit" className="logger__submit"> Se connecter</button>
    </form>
  </div>
);

export default Logger;
