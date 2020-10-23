import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import TodoItem from '../TodoItem';

function ItemsList(props) {
  const { items, handleCheck } = props;
  const listItems = items.map((item) => (
    <TodoItem
      check={item.checked}
      onclick={handleCheck}
      key={item.id}
      id={item.id}
      text={item.value}
    />
  ));
  return (
    <div>
      <ul className="todo item">
        <div>
          {listItems}
        </div>
      </ul>
    </div>
  );
}

ItemsList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  handleCheck: PropTypes.func.isRequired,
};

export default ItemsList;
