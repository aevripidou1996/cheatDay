import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbaravbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Create from './components/create/create';
import FoodDetails from './components/foodDetails/foodDetails';
import FoodCatalog from './components/foodCatalog/foodCatalog';
import Cart from './components/cart/cart';
import Checkout from './components/checkout/checkout';



function App() {
  return (
    <div >
  <Navbar/>
  <Routes> 
    <Route path='/' element={<Home/>}/>
    <route path='.login' element={<Login />}/>
    <route path='/signup' element={<Signup/>}/>
    <route path='/create' element={<Create/>}/>
    <route path='/food/:id' element={<FoodDetails/>}/>
    <route path='/foods/:id' element={<FoodCatalog/>}/>
    <route path='/cart' element={<Cart/>}/>
    <route path='/checkout' element={<Checkout/>}/>
  </Routes>
  <Footer/>

    </div>
  );
}

export default App;
