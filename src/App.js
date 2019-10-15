import React, { useReducer } from 'react';
import './styles/main.scss';

import Todos from './components/todos';
import mock_todos from './mock-data/mock_todos';
import todo_reducer from './reducers/todo_reducer';
import { FiDelete } from 'react-icons/fi';

const App = () => {

  const [todos, dispatch] = useReducer(todo_reducer, mock_todos);

  const addTodo = (description) => {
    dispatch({ type: "ADD", payload: { description } });
  };

  const deleteTodo = (deleteTodo) => {
    dispatch({ type: "DELETE", payload: { deleteTodo } });
  }

  const editTodo = (editTodo, editDescription) => {
    dispatch({ type: "EDIT", payload: { editTodo, editDescription } });
  }

  const toggleDone = (toggleTodo) => {
    dispatch({ type: "TOGGLE_DONE", payload: { toggleTodo } })
  };

  const removeDone = () => {
    dispatch({ type: "REMOVE_DONE" })
  };

  return (
    <div className="container">
      <header>
        <div className="header">
          <div className="todo-header"><span>Todos</span></div>
          <div className="remove-done"><FiDelete onClick={removeDone} /></div>
        </div>
      </header>
      <Todos todos={todos} onAdd={addTodo} onEdit={editTodo} onDelete={deleteTodo} onComplete={toggleDone} removeDone={removeDone} />
    </div>
  )
};

export default App;
