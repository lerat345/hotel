import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import Home from "./components/home"
import './App.css';
import HotelDetails from './components/about';
import { Route, Routes } from "react-router-dom";
import Register from "./components/register";
import {useNavigate} from 'react-router-dom'
import SignIn from './components/SignIn';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Book from './components/book';




function App() {
  return (
    <div className="container">
      
    
      <Routes>
       
        <Route path="/" element={<SignIn/>} />
        <Route path="/home" element={<Navbar/>} />
        <Route path="/register" element={<Register/>} />
        
       
        
        
      </Routes>

    
  
    
    
  <Gallery/>
  <Testimonials/>
  <Book/>

      
      
    </div>
    
  );
  }


export default App;
