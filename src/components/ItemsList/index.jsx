import React from "react";
import './styles.css';
import TodoItem from "../TodoItem";


function ItemsList (props) {
    const {items} = props;
    const listItems = items.map (item =>
        {
            return <TodoItem key={item.id} text={item.value} />
        }
    );

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

export default ItemsList