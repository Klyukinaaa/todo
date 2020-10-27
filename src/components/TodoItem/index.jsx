import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function TodoItem(props) {
  const {
    text, check, onclick, id, color,
  } = props;
  return (
    <li>
      <div className={`checkbox ${check ? 'checked_color' : ' '}`} style={{ backgroundColor: color }}>
        <input id={id} type="checkbox" onChange={() => onclick(id)} />
      </div>
      <label style={{ backgroundColor: color }} htmlFor={id} className={`task ${check ? 'checked_color' : ' '}`}>
        {text}
      </label>
    </li>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  check: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default TodoItem;
