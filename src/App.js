import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  </div>
)
export default App;
