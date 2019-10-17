
import React from 'react'
import { FiDelete } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';
import './todoTask.scss';

const TodoTask = ({ task, onEdit, onDelete, onToggleDone }) => {

    const onEditTask = (task) => {
        const editDescription = prompt("Edit value", task.description);
        if (editDescription == null || editDescription === '') {
            return;
        };

        onEdit(task, editDescription);
    }

    return (
        < div className="task-container" >
            <div className="desc" style={{ textDecoration: task.done ? "line-through" : "" }}>{task.description} </div>
            <div className="done"><input type="checkbox" checked={task.done} onChange={() => onToggleDone(task)} /></div>
            <div className="edit"><FiEdit2 onClick={() => onEditTask(task)} /></div>
            <div className="delete"><FiDelete onClick={() => onDelete(task)} /></div>
        </div>
    )
}

export default TodoTask;

