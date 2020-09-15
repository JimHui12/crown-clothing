import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import MenuItem from './components/menu-item/menu-item.component';
import Directory from './components/directory/directory.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch >
        <Route exact path='/' exact component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>     
    </div>
  );
}

export default App;
