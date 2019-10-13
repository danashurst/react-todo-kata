import React, { useReducer, useState } from 'react';
import './styles/main.scss';

import Todos from './components/todos';

const App = () => {

  return (
    <div className="container">
      <header>
        <div className="header">
          <div className="todo-header"><span>Todos</span></div>
        </div>
      </header>
      <Todos />
    </div>
  )
};

export default App;
