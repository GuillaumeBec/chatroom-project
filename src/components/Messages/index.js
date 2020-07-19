import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

import './style.scss';

const Messages = ({ messages, stateAuthor }) => (
  <div className="messages">
    {messages.map((message) => (
      <Message
        key={message.id}
        {...message}
        stateAuthor={stateAuthor}
      />
    ))}
  </div>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  stateAuthor: PropTypes.string.isRequired,
};

export default Messages;
