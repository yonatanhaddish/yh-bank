// import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Position from './components/PositionExercise';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="signin" element={<SigninPage />} />
        <Route exact path="position" element={<Position />} />
      </Routes>
    </Router>
  );
}

export default App;
