import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homrscreen';
import ProductDescription from './screens/ProductDescription';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/product/:id" element={<ProductDescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
