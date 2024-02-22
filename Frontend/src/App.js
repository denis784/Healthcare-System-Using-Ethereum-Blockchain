import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* Add more routes as needed */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
