import React from 'react';
import './styles/main.scss';

import Todos from './components/todos';

const App = () => (
  <div className="container">
    <header>
      <h1>React Interview Test</h1>
      <h2>Paul Morris</h2>
    </header>
    <section>
      <article>
        <p>Todos</p>
        <Todos />
      </article>
    </section>
  </div>
);

export default App;
