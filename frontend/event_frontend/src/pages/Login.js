import React,{useState} from 'react';
import {login} from '../api/auth';
import {useNavigate} from 'react-router-dom'

function Login(){
    const [username,setusername]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();


    const handleLogin= async(e)=>{
        e.preventDefault();
        try{
          const res  = await login({username,email,password});
          localStorage.setItem('token',res.data.access);
          navigate('/home');
        }
        catch(err){
            alert('login failed');
        }
    };
    
   return( <form onSubmit={handleLogin}>
    <h1>Login</h1>
     <label>Enter Username</label>
    <input type='text' value={username} onChange={e=>setusername(e.target.value)}/>
    <br></br>
    <label>Enter your email</label>
    <input type='email' value={email} onChange={e=>setEmail(e.target.value)}/>
    <br></br>
    <label>Enter your password</label>
    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
    <button type='submit'>Submit</button>
   </form>);
}
export default Login;

