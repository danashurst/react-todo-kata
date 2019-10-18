import React, { useState } from 'react';
import './editTodo.scss';

const EditTodo = ({ task, onEdit }) => {

    const [editDescription, setEditDescription] = useState(task.description);

    const updateDescription = (e) => {
        setEditDescription(e.target.value);
    };

    const keyDown = (e) => {
        if (e.key === 'Enter') {
            onEdit(task, editDescription);
        };
        if (e.key === 'Escape') {
            onEdit(task, null);
        }
    }

    return (
        <div className="edit-container">
            <div className="edit-description"><input type="text" value={editDescription} onKeyDown={keyDown} onChange={updateDescription} autoFocus /></div>
            {/* <div className="edit-instructions">Enter to update, Esc to cancel</div> */}
        </div>
    );
};

export default EditTodo;