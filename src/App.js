import React from 'react';
import './styles/main.scss';

import Todos from './components/todos';

const App = () => (
  <div className="container">
    <header>
      <h2 align="center">React Interview Test</h2>
      <h4 align="center">Paul Morris</h4>
    </header>
    <h1 align="center">Todos</h1>
    <Todos />
  </div>
);

export default App;
