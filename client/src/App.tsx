import React from 'react';
import './App.css';
import AppRoutes from "./router/appRoutes";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
