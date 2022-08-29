import { useState } from "react";
import {auth }from '../firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import SignIn from './SignIn';
import {useNavigate} from 'react-router-dom'
import { click } from '@testing-library/user-event/dist/click';
import { registerVersion } from "firebase/app";




     function Register(){
        const navigate = useNavigate();
    const [password,setPassword] =useState("")
   const [name,setName] =useState("")
   const [surname,setSurname] =useState("")
   const [email,setEmail] =useState("")
   const [cell,setCell] =useState("")

       const Reg =()=>{
            
            createUserWithEmailAndPassword (auth,email,password)
            .then(auth=>{navigate ('/home')})
            .catch(error=>console.error(error))

   }


    return(
        <div className="FormRegister">

        <div className=' registration'>

        <div><h1>Registration</h1></div>



        <div>

        <input type="text" placeholder="Email" onChange={(event)=>setEmail(event.target.value)}/><br></br><br></br>

        <input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/><br></br><br></br>
        <input type="text" placeholder="name" onChange={(event)=>setName(event.target.value)}/><br></br><br></br>
        <input type="text" placeholder="surname" onChange={(event)=>setSurname(event.target.value)}/><br></br><br></br>
        <input type="text" placeholder="cell" onChange={(event)=>setCell(event.target.value)}/><br></br><br></br>



     
        <button onClick={Reg} type="submit" class="btn btn-primary">register </button>
   









</div>

        </div>



    </div>


)

}

export default Register;






                
                