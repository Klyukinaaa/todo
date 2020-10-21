import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InputForm from "./components/InputForm";

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            items: [],
            currentItem: {
                value: '',
                checked: false,
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
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault(); //отменим стандартное поведение браузера
        const newItem = this.state.currentItem;
        this.setState({
            currentItem:{
                value: '',
                checked: false,
            }
        })
        console.log(newItem);
    }

    render() {
        return (
            <div id="container">
                <div className="page">
                    <InputForm handleSubmit={this.handleSubmit}
                               inputValue={this.state.currentItem.value}
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
