import React, { useContext } from 'react';
import { FiDelete } from 'react-icons/fi';
import TodoContext from '../contexts/TodoContext';
import { TODO_DELETE_DONE } from '../reducers/todo-reducer';
import './todosHeader.scss';

const TodosHeader = () => {

    const [todos, dispatch] = useContext(TodoContext);

    const todosTotal = todos.length;
    const todosDone = todos.filter(task => task.done).length;
    const todosOutstanding = todosTotal - todosDone;
    const todosCount = `(${todosTotal} Tasks - ${todosOutstanding} Outstanding ${todosDone} Done)`;

    return (

        <div className="header-container">
            <div className="todo-header">Todos</div>
            <div className="counts">{todosCount}</div>
            <div className="remove-done"><FiDelete onClick={() => dispatch({ type: TODO_DELETE_DONE })} /></div>
        </div>
    );
}

export default TodosHeader;