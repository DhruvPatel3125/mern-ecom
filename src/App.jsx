import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Homrscreen from './screens/Homrscreen';
import ProductDescription from './screens/ProductDescription';

function App() {
  return (
   
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homrscreen />} />
          <Route path="/product/:id" element={<ProductDescription/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
