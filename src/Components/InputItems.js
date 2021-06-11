import React from 'react'

function InputItems(props) {
    let inputTodo
    if (props.todos.length) {
        inputTodo = props.todos.map(item => {
            return <li key={item.id}>
                {item.message}
                <button type='button' onClick={() => props.delete(item.id)}>
                    Delete</button>
            </li>
        })
    }
    return (
        <div>
            <ul>
                {inputTodo}
            </ul>
        </div>
    )
}

export default InputItems
