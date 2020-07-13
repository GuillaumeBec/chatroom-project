import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Logger = ({ open, handleToggle }) => {
  const handleFormOnClick = (event) => {
    event.preventDefault();
    console.log('je gère le form');
  };

  const handleToggleOnClick = () => {
    handleToggle();
    console.log(open);
  };

  return (
    <div className={`${open ? 'logger logger--open' : 'logger'}`}>
      <form className="logger__form" action="">
        <input type="email" name="usermail" id="usermail" className="logger__input" placeholder="Votre mail" />
        <input type="password" name="userpass" id="userpass" className="logger__input" placeholder="Votre mot de passe" />
        <button
          type="submit"
          className="logger__submit"
          onClick={handleFormOnClick}
        > Se connecter
        </button>
      </form>
      <button
        className="logger__toggler"
        type="button"
        onClick={handleToggleOnClick}
      >+
      </button>
    </div>
  );
};

Logger.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default Logger;
