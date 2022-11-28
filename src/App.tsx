import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainWindow from './components/MainWindow';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App" style={{ height: "100%" }}>
      <BrowserRouter>
        <MainWindow />
      </BrowserRouter>
    </div>
  );
}

export default App;
