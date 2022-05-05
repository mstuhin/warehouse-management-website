
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="products" element={<Products></Products>}></Route>
        <Route path="inventory" element={<Inventory></Inventory>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
