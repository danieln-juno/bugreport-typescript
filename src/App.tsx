import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import CreateIssueTool from './components/CreateIssueTool';
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Issues from './components/Issues';

function App() {

  return (
    <>
      <div className="App" style={{ height: "100%" }}>
        <Routes>
          <Route path='/' element={<CreateIssueTool />} />
          <Route path='settings' element={<Settings />} />
          <Route path='dashboard' element={<Dashboard />} />
          {/* for issue need to add it's id */}
          <Route path='issues' element={<Issues />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
