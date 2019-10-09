
import React from 'react'
import '../styles/main.scss';

const TodoItem = ({ item, onEdit, onDelete, onComplete }) => {
    const completeButtonText = item.done ? "Redo" : "Complete"

    return (
        < div className="todo" >
            <div className="desc" style={{ textDecoration: item.done ? "line-through" : "" }}>{item.description}</div>
            <div className="action-buttons">
                <button className="complete" onClick={() => onComplete(item)}>{completeButtonText}</button>
                <button className="edit" onClick={() => onEdit(item)}>Edit</button>
                <button className="delete" onClick={() => onDelete(item)}>Delete</button>
            </div>
        </div >
    )
}

export default TodoItem;
