import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import About from '@/pages/About';
import Cart from '@/pages/Cart';
import Categories from '@/pages/Categories';
import Checkout from '@/pages/Checkout';
import Contact from '@/pages/Contact';
import Error from '@/pages/Error';
import Home from '@/pages/Home';
import Privacy from '@/pages/Privacy';
import ProductDetails from '@/pages/ProductDetails';
import Profile from '@/pages/Profile';
import Terms from '@/pages/Terms';
import Wishlist from '@/pages/Wishlist';

// AUTHENTICATIONS
import ForgotPassword from '@/pages/auth/ForgotPassword';
import Login from '@/pages/auth/Login';
import Register from '@/pages/auth/Register';
import ResetPassword from '@/pages/auth/ResetPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* AUTHENTICATIONS */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search-results' element={<Categories />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/product-details' element={<ProductDetails />} />

        {/* USER-PROFILE */}
        <Route path='/profile' element={<Profile />} />

        {/* PRIVACY-POLICY & TERMS-AND-CONDITIONS */}
        <Route path='/terms-of-use' element={<Terms />} />
        <Route path='/privacy-policy' element={<Privacy />} />

        {/* PAGE-NOT-FOUND */}
        <Route path='/*' element={<Error />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
};

export default App;
