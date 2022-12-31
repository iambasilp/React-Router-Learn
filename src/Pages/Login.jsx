import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { login } from "../Api/user";
import "./Styles/Login.css";
const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [error, setError] = useState("")
  const handleOnClicked = ()=>{
    setError("")
    login(username)
        .then(()=>{
            navigate('/')
        }).catch((error)=>{
            setError(error)
        })

  }
  return (
    <>
      <form className="login-form">
        <p className="login-text">
          <span className="fa-stack fa-lg">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className="fa fa-lock fa-stack-1x"></i>
          </span>
        </p>
        <h2 style={{color:"white",textAlign:"center",backgroundColor:"red"}}>{error}</h2>
        <input
          type="text"
          className="login-username"
          required
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          className="login-password"
          placeholder="Password"
        />
        <input
          type="submit"
          name="Login"
          value="Login"
          className="login-submit"
          onClick={handleOnClicked}
        />
      </form>
      <div className="underlay-photo"></div>
      <div className="underlay-black"></div>
    </>
  );
};

export default Login;
