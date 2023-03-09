import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import './component/Footer.css';
import './component/Login.css';
import './component/ProductPage.css';
import './component/ShopPage.css';
import './component/CartPage.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './component/pages/LandingPage';
import LoginPage from './component/pages/LoginPage';
import Registration from './component/pages/Registration';
import ShopPage from './component/pages/ShopPage';
import Cart from './component/pages/Cart';
import ProductPage from './component/pages/ProductPage';
import Dashboard from './admin/Dashboard';
import Users from './admin/Users';
import Product from './admin/Product';
import EditUsers from './admin/EditUsers';
import EditProducts from './admin/EditProducts';
import MyContext from './component/pages/MyContext';

function App() {
  return (
    <div className='App'>
      <MyContext>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/LandingPage/ProductPage' element={<LandingPage />} />
            <Route path='/LogIn' element={<LoginPage />} />
            <Route path='/Login/Registration' element={<Registration />} />
            <Route path='/ShopPage' element={<ShopPage />} />
            <Route path='/ShopPage/:id' element={<ProductPage />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Users' element={<Users />} />
            <Route path='/Product' element={<Product />} />
            <Route path='/EditUsers' element={<EditUsers />} />
            <Route path='/EditProducts' element={<EditProducts />} />
          </Routes>
        </BrowserRouter>
      </MyContext>
    </div>
  );
}

export default App;
