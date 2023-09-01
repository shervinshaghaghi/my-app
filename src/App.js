import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/Main.js';

import './App.css';
import './Styles.css';

function App() {
  return (
    <Router>
      <Main /> {/* Render the Main component, which handles routing */}
    </Router>
  );
}

export default App;
