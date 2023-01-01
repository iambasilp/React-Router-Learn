import React, { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../Api/user";
import './Login.css'
const Login = () => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const handleOnClick = ()=>{
        setError("")
    login(user)
        .then(()=>{
            // login true
            navigate('/')
        }).catch((error)=>{
            // login false
            setError(error)
        })
  }
  return (
    <div className="login-wrapper">
      <form action="" className="form">
        {error!='' ? <h2 className="error">{error}</h2> : ''}
        
        <h2>Login</h2>
        <div className="input-group">
          <input
            value={user}
            onChange={(event) => setUser(event.target.value)}
            type="text"
            name="loginUser"
            id="loginUser"
            required
          />
          <label htmlFor="loginUser">User Name</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            required
          />
          <label htmlFor="loginPassword" >Password</label>
        </div>
        <input
          type="submit"
          value="Login"
          className="submit-btn"
          onClick={handleOnClick}
        />
      </form>
    </div>
  );
};

export default Login;
