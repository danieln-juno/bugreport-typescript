import React from 'react';
import ReactDom from "react-dom";
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import CreateIssueTool from './components/CreateIssueTool';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Issues from './components/Issues';

function App() {

  return (
      <div className="App">
        <CreateIssueTool />
        <Routes>
          <Route path='settings' element={<Settings />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='issues' element={<Issues />} />
        </Routes>
      </div>
  );
}

export default App;
