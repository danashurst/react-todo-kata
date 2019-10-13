import React, { useReducer, useState } from 'react';
import './styles/main.scss';
// import { FiDelete } from 'react-icons/fi';

import Todos from './components/todos';
// import todo_reducer from './reducers/todo_reducer';
// import mock_todos from './mock-data/mock_todos';

const App = () => {

  // const [todos, dispatch] = useReducer(todo_reducer, mock_todos);

  // const removeCompleteItems = () => {
  //   console.log('REMOVED');
  //   dispatch({ type: 'REMOVE_DONE' });
  // };

  return (
    <div className="container">
      <header>
        <div className="header">
          <div className="todo-header"><span>Todos</span></div>
          {/* <div className="remove-done"><FiDelete onClick={removeCompleteItems} /></div> */}
        </div>
      </header>
      <Todos />
    </div>
  )
};

export default App;
