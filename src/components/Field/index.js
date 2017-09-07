import React, { PropTypes } from 'react';

const Field = ({ label, onChangeHandler, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input type="text" onChange={onChangeHandler} value={value} />
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Field;
