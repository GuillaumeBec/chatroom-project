import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Message = () => (

  <div className="message">
    <span className="message__infos">
      Auteur - 17h15
    </span>
    <div className="message__content">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </div>
  </div>
);

export default Message;
