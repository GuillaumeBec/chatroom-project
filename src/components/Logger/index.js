import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Logger = () => (
  <div className="logger">
    <form className="logger__form" action="">
      <input type="email" name="usermail" id="usermail" className="logger__input" placeholder="Votre mail" />
      <input type="password" name="userpass" id="userpass" className="logger__input" placeholder="Votre mot de passe" />
      <button type="submit" className="logger__submit"> Se connecter</button>
    </form>
    <button className="logger__toggler" type="button">+
    </button>
  </div>
);

export default Logger;
