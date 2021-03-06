import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Message = ({
  author,
  content,
  date,
  stateAuthor,
}) => {
  return (
    <div className={`${author === stateAuthor ? 'message__sent' : 'message'}`}>
      <span className="message__infos">
        {author} - {date}
      </span>
      <div className="message__content">
        { content }
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  stateAuthor: PropTypes.string.isRequired,
};

export default Message;
