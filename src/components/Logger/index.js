import React from 'react';
import PropTypes from 'prop-types';
import Field from '../../containers/Field';

import './style.scss';

const Logger = ({ open, handleToggle }) => {
  const handleFormOnClick = (event) => {
    event.preventDefault();
    // console.log('je gère le form');
  };

  const handleToggleOnClick = () => {
    handleToggle();
    // console.log(open);
  };

  return (
    <div className={`${open ? 'logger logger--open' : 'logger'}`}>
      <form className="logger__form" action="">
        <Field
          type="email"
          id="usermail"
          className="logger__input"
        />
        <Field
          type="password"
          id="userpass"
          className="logger__input"
        />
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
