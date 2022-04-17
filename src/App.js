import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Checkout from './Pages/Home/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:name" element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
