
import './App.css';
import Home  from './components/Home';
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import AddProduct from './components/AddProduct';

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path='/addproduct' element={<AddProduct />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
