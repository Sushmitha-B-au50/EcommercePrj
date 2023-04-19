import Header from './components/navbar';
import Home from './components/home';
import AdminProductList from './components/Admin/productListing';
import Login from './components/login';
import Signup from './components/signup';
import AddProduct from './components/Admin/addProduct';
import EditProduct from './components/Admin/editProduct';
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
        </Routes>
        </div>
      
        </BrowserRouter>
    
    </div>
  );
}

export default App;
