import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function TodoItem(props) {
  const {
    text, check, onclick, id,
  } = props;
  return (
    <li>
      <div id="check" className="checkbox">
        <input type="checkbox" checked={check} onChange={() => onclick(id)} />
      </div>
      <label htmlFor="check" className="task" style={{ background: '#b1b1b1' }}>
        {text}
      </label>
    </li>
  );
}

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  check: PropTypes.bool.isRequired,
  onclick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default TodoItem;
