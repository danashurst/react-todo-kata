import React from 'react'

const TodoItem = ({ item, onEdit, onDelete }) => {
    return (
        <div>
            <div>{item.description}</div>
            <input type="checkbox" value={item.done} />
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item)}>Delete</button>
        </div>
    )
}

export default TodoItem;
