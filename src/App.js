import React, { useReducer } from 'react';
import { FiDelete } from 'react-icons/fi';

import Todos from './components/todos';
import mockTodos from './mock-data/mock_todos';
import { TodoProvider } from './contexts/TodoContext';
import todoReducer, { TODO_DELETE_DONE } from './reducers/todo-reducer';

import './styles/main.scss';

const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, mockTodos);

  return (
    <div className="container">
      <header>
        <div className="header">
          <div className="todo-header"><span>Todos</span></div>
          <div className="remove-done"><FiDelete onClick={() => dispatch({ type: TODO_DELETE_DONE })} /></div>
        </div>
      </header>
      <TodoProvider value={[todos, dispatch]}>
        <Todos />
      </TodoProvider>
    </div>
  )
};

export default App;
