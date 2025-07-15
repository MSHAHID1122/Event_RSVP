import React, { useState } from "react";
import { register } from '../api/auth';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username,setusername]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [re_password, setRePassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== re_password) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await register({ username,password, re_password });
      alert('Check your email for the verification link.');
      navigate('/home');
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignUp}>
      <h2>Sign Up</h2>

      <label>Email</label><br />
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      /><br />
      <label>User Name</label><br />
      <input
        type="text"
        value={username}
        onChange={e => setusername(e.target.value)}
        required
      /><br />

      <label>Password</label><br />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      /><br />

      <label>Confirm Password</label><br />
      <input
        type="password"
        value={re_password}
        onChange={e => setRePassword(e.target.value)}
        required
      /><br />

      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;
