import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/view/home';
import Acount from 'components/view/acount';

import logo from './logo.svg';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acount" element={<Acount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;