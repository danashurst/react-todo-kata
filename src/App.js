import React from 'react';
import { createStore } from 'redux'
import './styles/main.scss';
import reducers from './reducers/index';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());

const App = () => (
  <Provider store={store}>
    <div className="container">
      <header>
        <h1>React Interview Test</h1>
      </header>
      <section>
        <article>
          <p>This task is to create a todo list app in react, the requirements are: </p>
          <ol>
            <li>As a user I want to be able to see a list of items that i need to complete</li>
            <li>As a user I want to be able to add a new item to the to do list</li>
            <li>As a user I want to be able to remove an item from to do list</li>
            <li>As a user I want to be able to edit an item in the to do list</li>
            <li>As a user I want to be able to mark an item as done in the to do list</li>
            <li>As a user I should see a good user experience on mobile and tablet</li>
            <li>As a product owner I want the to do list application to be visually pleasing</li>
          </ol>
        </article>
      </section>
    </div>
    </Provider>
);

export default App;
