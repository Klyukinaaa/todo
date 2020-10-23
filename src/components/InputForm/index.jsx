import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function InputForm(props) {
  const { handleSubmit, inputValue, onChange } = props;
  return (
    <form id="text" onSubmit={handleSubmit}>
      <label htmlFor="add" className="new_item">
        <input
          value={inputValue}
          onChange={onChange}
          id="new-task"
          maxLength="100"
          type="text"
          size="35"
          placeholder="Add New Item"
        />
      </label>
      <span className="color_container">
        <div className="color_btns" />
        <div className="text_btn">
          <button type="submit" id="add">Add</button>
        </div>
      </span>
    </form>
  );
}

InputForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputForm;
