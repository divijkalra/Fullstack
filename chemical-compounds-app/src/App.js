// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CompoundPage from './pages/CompoundPage';
import EditCompound from './components/EditCompound';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compound/:id" element={<CompoundPage />} />
        <Route path="/compound/:id/edit" element={<EditCompound />} />
      </Routes>
    </Router>
  );
}

export default App;
