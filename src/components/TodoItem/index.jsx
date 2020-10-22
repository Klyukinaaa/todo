import React from "react";

import './styles.css';

function TodoItem (props) {
    const {text} = props
    return (
        <li>
            <div className="checkbox">
                <input type='checkbox'/>
            </div>
            <label className="task" style={{background: "#b1b1b1"}}>
                {text}
            </label>
        </li>
    )
}


export default TodoItem