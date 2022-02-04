import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';

const App = () => (
  <BrowserRouter>
    <MainRouter></MainRouter>
  </BrowserRouter>
)

export default App;
