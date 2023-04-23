import Header from './components/navbar';
import Home from './components/home';
import AdminProductList from './components/Admin/productListing';
import Login from './components/login';
import Signup from './components/signup';
import AddProduct from './components/Admin/addProduct';
import EditProduct from './components/Admin/editProduct';
<<<<<<< HEAD
import WCListing from './components/wcListing';
import MCListing from './components/mcListing';
import ACListing from './components/otherPrdsListing';
import Cart from './components/cart';
import Order from './components/order';
=======
>>>>>>> d3ac1ef125df9d6cb008ac66d4c192a5688a26a4
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/adminProductList" element={<AdminProductList/>}/>
          <Route path="/AddProduct" element={<AddProduct/>}/>
          <Route path="/EditProduct/:id" element={<EditProduct/>}/>
<<<<<<< HEAD
          <Route path="/WC" element={<WCListing/>}/>
          <Route path="/MC" element={<MCListing/>}/>
          <Route path="/AC" element={<ACListing/>}/>
          <Route exact path="/Cart" element={<Cart />}/>
          <Route exact path="/Order" element={<Order />}/>
=======
>>>>>>> d3ac1ef125df9d6cb008ac66d4c192a5688a26a4
        </Routes>
        </div>
      
        </BrowserRouter>
    
    </div>
  );
}

export default App;
