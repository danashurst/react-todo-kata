
import React from 'react'
import '../styles/main.scss';
import { FiDelete } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';

const TodoItem = ({ item, onEdit, onDelete, onComplete }) => {
    const onCheckboxChange = (e) => {
        onComplete(item);
    }

    const onEditItem = (item) => {
        const editDescription = prompt("Edit value", item.description);
        if (editDescription == null || editDescription === '') {
            return;
        };

        onEdit(item, editDescription);
    }


    return (
        < div className="flex-container" >
            <div className="desc" style={{ textDecoration: item.done ? "line-through" : "" }}>{item.description} </div>
            <div className="done"><input type="checkbox" checked={item.done} onChange={onCheckboxChange} /></div>
            <div className="edit"><FiEdit2 onClick={() => onEditItem(item)} /></div>
            <div className="delete"><FiDelete onClick={() => onDelete(item)} /></div>
        </div>
    )
}

export default TodoItem;

