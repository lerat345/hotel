import React from 'react';
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {auth }from '../firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import Next from 'react-bootstrap/esm/PageItem';


 

function SignIn(){
    const navigate = useNavigate ();
   const [email,setEmail] = useState("");
   const [password,setPassword] =useState("");


   const goReg =()=>{
    navigate('/register')
   }

   const SignIn =()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then(auth=>{navigate('/home')})
    .catch(error=>console.error(error))
    

 
    
}
    return(
       <div>

<div>

    <label for="exampleInputEmail1">Email address</label>
    <input onChange={(event)=>setEmail(event.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   We'll never share your email with anyone else<br/>

    <label for="exampleInputPassword1">Password</label>
    <input onChange={(event)=>setPassword(event.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label><br/>

  <button onClick={SignIn} type="submit" class="btn btn-primary">Sign In</button>
  <button onClick={goReg} type="submit" class="btn btn-primary">Register</button>
</div>



       </div>
)

}

export default SignIn;

