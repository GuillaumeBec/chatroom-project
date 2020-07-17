import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Field = ({
  id,
  value,
  label,
  setValue,
  type,
}) => {
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label
        htmlFor={id}
      >
        {label}
      </label>
      <input
          className = "logger__input"
          placeholder={label}
          value={value}
          onChange={handleOnChange}
          type={type}
      />
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Field;
