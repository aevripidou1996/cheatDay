import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from 'src/components/Navbar'
import Footer from 'src/components/footer';
import Home from 'src/components/home';
import Login from 'src/components/login';
import Signup from 'src/components/signup';
import Create from 'src/components/create';
import FoodDetails from 'src/components/foodDetails';
import FoodCatalog from 'src/components/foodCatalog';
import Cart from 'src/components/cart';
import Checkout from 'src/components/checkout';
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
