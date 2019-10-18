
import React, { useState } from 'react'
import { FiDelete } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';
import EditTodo from './EditTodo';

import './todoTask.scss';

const TodoTask = ({ task, onEdit, onDelete, onToggleDone }) => {

  const [editMode, setEditMode] = useState(false);

  const onEditTask = () => {
    setEditMode(!editMode);
  }
  const onEditComplete = (task, editDescription) => {
    setEditMode(false);

    if (editDescription == null) { return; }

    task.description = editDescription;   // todo: dispatch only needs task now ?

    onEdit(task, editDescription);
  }

  return (
    <div className="task-container" >

      {editMode
        ? (<EditTodo className="edit-todo" task={task} onEdit={onEditComplete} />)
        : (<div className="desc" style={{ textDecoration: task.done ? "line-through" : "" }}>{task.description} </div>)
      }

      <div className="done"><input type="checkbox" checked={task.done} onChange={() => onToggleDone(task)} /></div>
      <div className="edit"><FiEdit2 onClick={() => onEditTask()} /></div>
      <div className="delete"><FiDelete onClick={() => onDelete(task)} /></div>
    </div >
  );
}

export default TodoTask;
