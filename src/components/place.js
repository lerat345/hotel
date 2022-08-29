import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import {useNavigate} from 'react-router-dom';




function place(){
    const navigate =useNavigate();
    const [user,loading,error] =useAuthState(auth);
    const signOutClick =() =>{
        auth.signOut();
        navigate('/');
        
    }
    return(
        <>
        <h1>welcome  {user?.email} </h1>
        <button onClick={()=>signOutClick()}>Signout</button>




        <div className="formlogin">

 

<div className='login'>

<div><h1 className="h1">Login</h1></div>



<div>

<input type="text" placeholder="Email" onChange={(event)=>setEmail(event.target.value)} /><br></br><br></br>

<input type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/><br></br><br></br>



<button style={{'borderradius':'30px'}} aria-pressed="true"   onClick={SignIn}>Login</button><br></br><br></br>



<p>Don't have an account?<br></br>

   <a href='http://localhost:3000/register'>Register Here</a></p>



</div>

</div>



</div>












        </>
    

















    
    )

}
export default place;