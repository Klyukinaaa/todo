import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputForm from "./components/InputForm";
import ItemsList from "./components/ItemsList";


class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            items: [],
            currentItem: {
                value: '',
                checked: false,
                id: ''
            }
        }
        this.handleChange = this.handleChange.bind(this); //создает новую функцию, с новым контекстом
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            currentItem:{
                value: event.target.value,
                checked: false,
                id: Date.now()
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault(); //отменим стандартное поведение браузера
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.value !== ''){
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    value: '',
                    checked: false,
                    id: ''
                }
            })
        }
    }

    checkItem(id) {

    }

    render() {
        return (
            <div id="container">
                <div className="page">
                    <ItemsList items = {this.state.items}>
                    </ItemsList>

                    <InputForm handleSubmit = {this.handleSubmit}
                               inputValue = {this.state.currentItem.value}
                               onChange = {this.handleChange}
                    />
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Container />,
    document.getElementById('root')
);
