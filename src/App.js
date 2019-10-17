import React, { useReducer } from 'react';

import Todos from './components/todos';
import TodosHeader from './components/TodosHeader';

import mockTodos from './mock-data/mock_todos';
import { TodoProvider } from './contexts/TodoContext';
import todoReducer, { TODO_DELETE_DONE } from './reducers/todo-reducer';

import './styles/main.scss';

const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, mockTodos);

  return (
    <div className="container">
      <TodoProvider value={[todos, dispatch]}>
        <TodosHeader />
        <Todos />
      </TodoProvider>
    </div>
  )
};

export default App;
