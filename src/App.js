import React from 'react';
import { SiteContext } from './contexts';
import { siteInitialState } from './reducers/site';
import ToDo from './components/todo';
import './styles/main.scss';

const App = () => (
  <SiteContext.Provider value={siteInitialState}>
    <SiteContext.Consumer>
      { 
        value => {
          return (
            <div className="container">
              <h1>{value.title}</h1>
              <ToDo />
            </div>
          )
        }
      }
    </SiteContext.Consumer>
  </SiteContext.Provider>
);

export default App;
