import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/view/home';

import logo from './logo.svg';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;