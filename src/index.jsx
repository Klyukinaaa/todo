import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputForm from './components/InputForm';
import ItemsList from './components/ItemsList';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        value: '',
        checked: false,
        id: '',
      },
    };
    this.handleChange = this.handleChange.bind(this); // создает новую функцию, с новым контекстом
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleChange(event) {
    this.setState({
      currentItem: {
        value: event.target.value,
        checked: false,
        id: Date.now(),
      },
    });
  }

  handleSubmit(event) {
    const { currentItem, items } = this.state;
    event.preventDefault(); // отменим стандартное поведение браузера
    const newItem = currentItem;
    console.log(newItem);
    if (newItem.value !== '') {
      const newItems = [...items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          value: '',
          checked: false,
          id: '',
        },
      });
    }
  }

  // TO DO: Object.assign, descructurisation
  handleCheck(id) {
    const { items } = this.state;
    const newItems = [...items];
    const item = items.find((el) => el.id === id);
    if (item) {
      item.checked = !item.checked;
    }
    this.setState({
      items: newItems,
    });
  }

  render() {
    const { currentItem, items } = this.state;
    return (
      <div id="container">
        <div className="page">
          <ItemsList handleCheck={this.handleCheck} items={items} />
          <InputForm
            handleSubmit={this.handleSubmit}
            inputValue={currentItem.value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Container />,
  document.getElementById('root'),
);
