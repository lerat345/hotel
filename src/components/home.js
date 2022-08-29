import Card from 'react-bootstrap/Card';
import hotel from "../images/hotel.jpg"
import jumbotron from "../images/hotel.jpg"
import Image from 'react-bootstrap/Image';
import facebook  from '../images/icons8-facebook-48.png';
import twitter from '../images/icons8-twitter-circled-50.png';
import instagram  from '../images/icons8-instagram-24.png';
import pinterest  from '../images/icons8-pinterest-30.png'
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../firebase';
import SignIn from './SignIn';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';


function Home() {

    const navigate = useNavigate();
    const {booknow, setBooknow} = useState("");

    const book =()=>{
        navigate('/')
    }
   
    return (
        

        <div  style={{display:'flex'}}>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
      
                
            </div>
        </div>
      


        <div>
           <h1 className='heading1'>Archer Hotel</h1>
           <p className='body1'>A LUXURY STAY</p>
           <button onClick={book} className='btn1'>BOOK NOW</button>
           <button className='btn2'>MAKE RESERVATION</button>

        
         
      </div>  
     </div>
        
    );

};





export default Home;