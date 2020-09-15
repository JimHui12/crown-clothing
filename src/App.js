import React from 'react';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import MenuItem from './components/menu-item/menu-item.component';
import Directory from './components/directory/directory.component';


function App() {
  return (
    <div>
      <HomePage /> 
      <MenuItem />
      <Directory />
    </div>
  );
}

export default App;
