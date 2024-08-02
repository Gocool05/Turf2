import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Bookings from './pages/Booking/Bookings';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import GoogleCallBackAuth from './pages/Login/GoogleCallBackAuth';
import MyBookings from './pages/Booking/MyBookings';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/bookings' element={<Bookings/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/mybookings' element={<MyBookings/>} />
  <Route path="/auth/google/callback" element={<GoogleCallBackAuth />} />
 </Routes>
 </BrowserRouter>
  );
}

export default App;
