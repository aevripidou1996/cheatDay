import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/nav/navbar'
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Create from './components/create/create';
import FoodDetails from './components/foodDetails/foodDetails';
import FoodCatalog from './components/foodCatalog/foodCatalog';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';
import {useLocation} from 'react-router-dom'
import { useEffect } from 'react';



function App() {
 const location = useLocation()
 
 useEffect(() => {
   window.scrollTo(0, 0)
 }, [location.pathname])


  return (
    <div>
       <Navbar />
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/create' element={<Create />} />
         <Route path='/food/:id' element={<FoodDetails />} />
         <Route path='/foods/:id' element={<FoodCatalog />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/checkout' element={<Checkout />} />
       </Routes>
       <Footer />
    </div>
  );
}

export default App;
