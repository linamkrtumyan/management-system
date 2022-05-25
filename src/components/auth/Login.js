import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./auth.css";

function Login({signIn, errorMessage}) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfiemPassword, setSignUpConfirmPassword] = useState("");

  const [signUp, setSignUp] = useState(false);

  const handleSignUpClick = () => {
    setSignUp(!signUp);
  };

  const handleSignIn = (e) => {
      e.preventDefault()
      // const signIn = {userName,password}
      // console.log(signIn, "signIn")

      signIn(userName,password)
  }

  return (
    <div className="auth-wrapper">
      <div
        className={signUp ? "container right-panel-active " : "container"}
        id="container"
      >
        <div className="form-container sign-up-container">
        {/* <img src={require("../../assets/logoWithName.svg").default} alt="logo" /> */}

          <div className="inputs-container"  >
            <h1>Create Account</h1>

            <input
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Firstname"
            />
            <input
              value={lastName}
              name="name"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Lastname"
            />
            <input
              value={username}
              name="name"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
            />
            <input
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
            <input
              value={signUpPassword}
              name="signUpPassword"
              onChange={(e) => setSignUpPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <input
              value={signUpConfiemPassword}
              name="signUpConfirmPassword"
              onChange={(e) => setSignUpConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
            />
            <button className="submitButton" >Sign Up</button>
          </div>
        </div>
        <div className="form-container sign-in-container">

        {/* <img src={require("../../assets/logoWithName.svg").default} alt="logo" /> */}

          <div  className="inputs-container" >
            <h1>Sign in</h1>

            <input
              value={userName}
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
            //   type="email"
              placeholder="Username"
            />
            <input
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            <p style={{color:"red", fontSize:"12px"}} >{errorMessage}</p>
            {/* <a href="#">Forgot your password?</a> */}
            <button   className="submitButton" onClick={(e) => handleSignIn(e)} >Sign In</button>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              {/* <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p> */}
               <img style={{width:"250px"}} src={require("../../assets/logo1.png")} alt="logo" />
              <button className="submitButton ghost" id="signIn" onClick={handleSignUpClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              {/* <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p> */}
               <img style={{width:"250px"}} src={require("../../assets/logo1.png")} alt="logo" />
              <button className="submitButton ghost" id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
