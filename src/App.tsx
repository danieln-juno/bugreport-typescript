import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainWindow from './components/MainWindow';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings';
import { Dashboard } from '@mui/icons-material';
import Issue from './components/Issue';
import CreateIssueTool from './components/CreateIssueTool';
import Form from './components/Form';

function App() {

  return (
    <>
      <div className="App" style={{ height: "100%" }}>
        <Routes>
          <Route path='/' element={<MainWindow />} />
          <Route path='settings/:id' element={<Settings />} />
          <Route path='dashboard/:id' element={<Dashboard />} />
          {/* for issue need to add it's id */}
          <Route path='issue' element={<Issue />} />
          <Route path='createissue' element={<CreateIssueTool />} >

          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
