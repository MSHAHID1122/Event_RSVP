import React,{useState} from "react";
import {register} from '../api/auth';
import {useNavigate} from 'react-router-dom'


function Signup(){
  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const handleSignUp = async(e)=>{
    e.preventDefault();
    try{
     await register({email,password});
     alert('check your email for verification link');
     navigate ('/home')
    }
    catch(err){
        alert("sign up failed");

    }

  };
  return(
    <form onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <label>Enter your email</label>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        <br></br>
        <label>Enter your password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <button type="submit">register</button>
    </form>
  );
}
export default Signup;