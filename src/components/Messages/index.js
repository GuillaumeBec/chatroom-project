import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import './style.scss';

const Messages = () => (
  <div className="messages">
    <Message />
    <Message />
    <Message />
    <Message />
  </div>
);

export default Messages;
