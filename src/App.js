import React from 'react';
import './styles/main.scss';

import Todos from './components/todos';

const App = () => (
  <div className="container">
    <header>
      <div className="header">
        <span className="todo-header">Todos</span>
      </div>
    </header>
    <Todos />
  </div>
);

export default App;
